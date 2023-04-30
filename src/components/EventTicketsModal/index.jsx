import { useEffect, useState } from "react";
import { Close } from "../../svgComponents";
import TicketRow from "../TicketRow";
import PromotionSection from "../PromotionSection";
import Button from "../../CoreUI/Button";

import styles from "./styles.module.scss";
const {
  eventTicketsModal,
  eventTicketsOverlay,
  modalCloseContainer,
  closeButton,
  eventTitle,
  ticketColumns,
  ticketColumn,
  ticketsFooter,
  ticketsFooterActions,
  ticketsFooterTotal,
  ticketsAction,
  noTickets,
} = styles;

const EventTicketsModal = ({
  toggleModal = () => {},
  eventData: { name, id } = { name: "no event name" },
  onConfirm = () => {},
  ticketsList = [],
  setTicketsList = () => {},
  promotionsList = [],
}) => {
  const selectedTicketsFromStore =
    JSON.parse(localStorage.getItem("selectedTickets")) || {};

  const [ticketTotals, setTicketTotals] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState(
    selectedTicketsFromStore?.[id]?.selectedTickets || []
  );
  const [promotionCodeError, setPromotionCodeError] = useState("");
  const [selectedPromotion, setSelectedPromotion] = useState({});
  const onTicketTotalPriceChange = (
    { total, id, quantity, name, price },
    index
  ) => {
    const newTicketTotals = [...ticketTotals];
    newTicketTotals[index] = total;
    setTicketTotals(newTicketTotals);
    setSelectedTickets((prev) => {
      const ticketIndex = prev.findIndex((ticket) => ticket.id === id);
      if (ticketIndex === -1) {
        return [...prev, { id, pickedQuantity: quantity, total, name, price }];
      }
      const newSelectedTickets = [...prev];
      newSelectedTickets[ticketIndex] = {
        id,
        pickedQuantity: quantity,
        total,
        name,
        price,
      };
      return newSelectedTickets;
    });
  };
  const onSubmitPromotionCode = (e) => {
    e.preventDefault();
    const eventPromotion = promotionsList?.find(
      (item) =>
        item?.couponCode === e?.target?.promoCode?.value &&
        item?.active &&
        new Date(item?.startDate) <= new Date() &&
        new Date() <= new Date(item?.endDate)
    );
    if (eventPromotion?.discount) {
      setSelectedPromotion(eventPromotion);
      setPromotionCodeError("");
    } else {
      setSelectedPromotion({});
      setPromotionCodeError("Invalid promotion code");
    }
  };
  const renderTicketsList = () => {
    if (!ticketsList.length)
      return <div className={noTickets}>There are no tickets available</div>;

    return ticketsList.map((ticket, index) => {
      return (
        <TicketRow
          onTotalChange={(total) =>
            onTicketTotalPriceChange({ ...total, name: ticket?.name }, index)
          }
          ticket={ticket}
        />
      );
    });
  };

  const renderTicketsColumns = () => {
    const ticketsColumns = ["Category", "Unit Price", "Quantity", "Total"];

    return ticketsColumns.map((column) => {
      return <span className={ticketColumn}> {column} </span>;
    });
  };

  const calculateTotalPrice = () =>
    selectedPromotion?.discount
      ? ticketTotals.reduce(
          (acc, curr) => (typeof curr === "number" ? acc + curr : acc),
          0
        ) *
        (1 - selectedPromotion.discount / 100)
      : ticketTotals.reduce(
          (acc, curr) => (typeof curr === "number" ? acc + curr : acc),
          0
        );

  useEffect(() => {
    const restOfTickets = ticketsList.filter(
      (obj1) => !selectedTickets.some((obj2) => obj1.id === obj2.id)
    );
    setTicketsList([...restOfTickets, ...selectedTickets]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={eventTicketsOverlay}>
      <div className={eventTicketsModal}>
        <div className={modalCloseContainer}>
          <span onClick={toggleModal} className={closeButton}>
            <Close /> Close
          </span>
        </div>

        <h1 className={eventTitle}>{name}</h1>
        <div className={ticketColumns}>{renderTicketsColumns()}</div>
        {renderTicketsList()}
        <PromotionSection
          promotionCodeError={promotionCodeError}
          selectedPromotion={selectedPromotion}
          setSelectedPromotion={setSelectedPromotion}
          onSubmit={onSubmitPromotionCode}
        />
        <div className={ticketsFooter}>
          <div className={ticketsFooterTotal}>
            <span>Total price: </span>
            <span>JOD {calculateTotalPrice()} </span>
          </div>
          <div className={ticketsFooterActions}>
            <Button
              onClick={toggleModal}
              className={ticketsAction}
              color="white"
            >
              Cancel
            </Button>
            <Button
              onClick={() =>
                onConfirm({
                  name: name,
                  id: id,
                  selectedTickets,
                  totalPrice: calculateTotalPrice(),
                  discountAmount:
                    (selectedPromotion.discount / 100) *
                    ticketTotals.reduce(
                      (acc, curr) =>
                        typeof curr === "number" ? acc + curr : acc,
                      0
                    ),
                  salesTax: 4.5,
                })
              }
              className={ticketsAction}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTicketsModal;
