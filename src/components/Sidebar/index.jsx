import { useEffect, useState } from 'react';
import CommonButton from '../../CoreUI/Button';
import Ticket from '../../svgComponents/components/Ticket';
import SelectedEventTickets from './SelectedEventTickets';
import { useDispatch, useSelector } from 'react-redux';
import OrderSummary from './OrderSummary';
import animations from '../../styles/animations.module.scss';
import { CSSTransition } from 'react-transition-group';
import EventTicketsModal from '../EventTicketsModal';
import useEndpoints from '../../hooks/useEndpoints';
import CheckoutForm from '../CheckoutForm';
import {
  setSelectedTickets as setSelectedTicketsAction,
  clearSelectedTickets
} from '../../redux/actionCreators/selectedTickets';

import styles from './styles.module.scss';
import { useNavigate } from 'react-router';
const { sidebarContainer, ticketsHeading, ticketsEmpty, ticketsCharge, ticketsWrapper, line } =
  styles;

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [eventTickets, setEventTickets] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { getEventTickets, addOrder } = useEndpoints();

  const userData = useSelector(({ auth }) => auth?.userData);
  const selectedTickets = useSelector(({ selectedTickets }) => selectedTickets.selectedTickets);
  const selectedTicketsArray = Object.values(selectedTickets || {});

  let totalQuantityForAllTickets = 0;
  let totalPriceForAllTickets = 0;
  let totalDiscount = 0;
  selectedTicketsArray?.forEach(event => {
    event?.selectedTickets?.forEach(ticket => {
      totalQuantityForAllTickets += ticket?.pickedQuantity || 0;
    });
    totalPriceForAllTickets += event?.totalPrice + event?.salesTax || 0;
    totalDiscount += event?.discountAmount || 0;
  });
  const selectedTicketsArrayLength = selectedTicketsArray?.length;

  const onEditEventClick = async event => {
    try {
      const tickets = await getEventTickets(event.id);
      setEventTickets(tickets);
      setSelectedEvent(event);
      setShowModal(true);
    } catch (err) {
      console.log('Error fetching event tickets.', err);
    }
  };

  const setSelectedTickets = tickets => {
    try {
      //  hit API to update selected tickets
      const storedTickets = JSON.parse(localStorage.getItem('selectedTickets'));

      dispatch(setSelectedTicketsAction(tickets));
      if (!tickets.selectedTickets.length && storedTickets[tickets.id]) {
        delete storedTickets[tickets.id];
        localStorage.setItem('selectedTickets', JSON.stringify({ ...storedTickets }));
      } else if (tickets.selectedTickets.length) {
        localStorage.setItem(
          'selectedTickets',
          JSON.stringify({ ...storedTickets, [tickets.id]: { ...tickets } })
        );
      }
      setShowModal(false);
    } catch (err) {
      console.log('Error setting selected tickets, ', err);
    }
  };

  const checkoutHandler = async contactInfo => {
    try {
      const userId = userData?.user_metadata?.id;
      const reshapeOrderList = selectedTicketsArray?.map(evt => {
        return {
          orderData: {
            eventId: evt?.id,
            userId,
            totalPrice: +evt?.totalPrice - +evt?.salesTax,
            orderDate: new Date(),
            tickets: evt.selectedTickets?.map(ticket => ({
              eventTicketId: ticket?.id,
              quantity: ticket?.pickedQuantity,
              totalPrice: ticket?.total,
              price: ticket?.price
            }))
          },
          contactInfo,
          isPayAtPos: true
        };
      });
      const responses = reshapeOrderList?.map(item => {
        return addOrder(item);
      });

      await Promise.all(responses);
      const location = JSON.parse(localStorage.getItem('agentAddress'));
      const confirmationData = {
        customerInfo: { ...contactInfo } || {},
        agentInfo: {
          name: `${userData?.given_name} ${userData?.family_name}`,
          location
        },
        events: selectedTicketsArray,
        paymentSummary: {
          discount: totalDiscount,
          salesTax: 'JOD 4.5',
          total: totalPriceForAllTickets
        },
        currency: 'JOD',
        paymentMethod: { method: 'Cash' }
      };
      localStorage.setItem('confirmationData', JSON.stringify(confirmationData));
      localStorage.removeItem('selectedTickets');
      dispatch(clearSelectedTickets());
      setShowCheckoutModal(false);
      navigate('/confirmation', { replace: true });
    } catch (error) {
      console.log('Error add order, ', error);
    }
  };
  return (
    <>
      <CSSTransition
        in={showModal}
        unmountOnExit
        timeout={300}
        classNames={{
          enter: animations.scaleUpDownEnter,
          enterActive: animations.scaleUpDownEnterActive,
          exit: animations.scaleUpDownExit,
          exitActive: animations.scaleUpDownExitActive
        }}
      >
        <EventTicketsModal
          eventData={selectedEvent}
          ticketsList={eventTickets}
          setTicketsList={setEventTickets}
          toggleModal={() => setShowModal(false)}
          onConfirm={setSelectedTickets}
        />
      </CSSTransition>
      <CSSTransition
        in={showCheckoutModal}
        unmountOnExit
        timeout={300}
        classNames={{
          enter: animations.scaleUpDownEnter,
          enterActive: animations.scaleUpDownEnterActive,
          exit: animations.scaleUpDownExit,
          exitActive: animations.scaleUpDownExitActive
        }}
      >
        <CheckoutForm
          toggleModal={() => setShowCheckoutModal(false)}
          totalAmount={totalPriceForAllTickets}
          selectedTicketsArray={selectedTicketsArray}
          checkoutHandler={checkoutHandler}
        />
      </CSSTransition>
      <div className={sidebarContainer}>
        <p className={ticketsHeading}>Selected Tickets ({totalQuantityForAllTickets})</p>
        <div className={ticketsWrapper}>
          {!!selectedTicketsArrayLength ? (
            selectedTicketsArray?.map((event, index) => {
              const { id, name, selectedTickets, discountAmount, totalPrice } = event;
              return (
                <>
                  <SelectedEventTickets
                    onEditEventClick={() => onEditEventClick(event)}
                    key={id}
                    eventId={id}
                    eventName={name}
                    tickets={selectedTickets}
                    discountAmount={discountAmount}
                    totalPrice={totalPrice}
                  />
                  {selectedTicketsArrayLength - 1 !== index && <div className={line}></div>}
                </>
              );
            })
          ) : (
            <div className={ticketsEmpty}>
              <Ticket />
              <p>No tickets were selected</p>
            </div>
          )}
          {!!selectedTicketsArrayLength && (
            <OrderSummary
              totalDiscount={totalDiscount}
              total={totalPriceForAllTickets}
              taxValue={4.5}
            />
          )}
        </div>

        <div className={ticketsCharge}>
          <CommonButton
            disabled={!selectedTicketsArrayLength}
            onClick={() => setShowCheckoutModal(true)}
          >
            Charge JOD {totalPriceForAllTickets.toFixed(2) || 0}
          </CommonButton>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
