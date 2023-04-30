import { useCallback, useEffect, useRef, useState } from 'react';
import TextField from '../../CoreUI/TextField';
import EventCard from '../../components/EventCard';
import EventTabs from '../../components/EventsTabs';
import { Search } from '../../svgComponents';
import useEndpoints from '../../hooks/useEndpoints';
import { useSelector } from 'react-redux';
import CommonButton from '../../CoreUI/Button';
import EventTicketsModal from '../../components/EventTicketsModal';
import animations from '../../styles/animations.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';
import { setSelectedTickets as setSelectedTicketsAction } from '../../redux/actionCreators/selectedTickets';
import { ORGANIZER } from '../../constant';
import styles from './styles.module.scss';

const {
  eventsPageContainer,
  searchContainer,
  eventsListContainer,
  eventCardContainer,
  searchInput,
  responseHint,
  searchButton
} = styles;

let totalItems = 0;
let page = 0;

const fakeData = [
  {
    id: 8,
    name: 'This Is Our Story: Storytelling with Shereen Saif | Ramadan 2023',
    description: 'bla bla bla',
    briefDescription: 'bla bla bla',
    tags: 'test',
    active: true,
    startDate: '2022-11-20T12:03:10.723Z',
    endDate: '2022-11-25T12:03:10.723Z',
    startTime: '06:30:30',
    endTime: '07:30:30',
    privacy: 'public',
    status: 'draft',
    facebookLink: null,
    instagramLink: null,
    snapchatLink: null,
    eventCategory: {
      id: 1,
      name: 'category4',
      description: 'description1'
    },
    subcategory: {
      id: 1,
      name: 'sub test',
      description: 'desc2'
    },
    user: {
      id: 3,
      firstName: 'leen',
      lastName: 'qtieshat',
      email: 'leen20qtt@gmail.com',
      active: true,
      status: 'active',
      roleId: 'rol_Oaf18q3eJeVK3qCB',
      providerUserId: '64492d235ef9b25191581d32',
      homePhone: null,
      jopTitle: null,
      company: null,
      website: null,
      blog: null,
      imageId: null,
      saleTax: 4.5,
      organizerId: null,
      createdBy: null,
      updatedBy: null,
      createdAt: '2023-04-26T13:54:44.365Z',
      updatedAt: '2023-04-26T13:54:44.365Z',
      role_id: 'rol_Oaf18q3eJeVK3qCB',
      image_id: null,
      organizer_id: null
    },
    eventImages: [],
    eventTickets: [],
    paymentPOS: [],
    PaymentMethods: [],
    eventDressCode: {
      id: 1,
      name: 'formal',
      description: 'formal dress code'
    },
    event_promotions: [],
    location: {
      id: 1,
      name: 'test coffe',
      reservedSeating: false,
      type: 'Venue',
      address: {
        id: 1,
        address1: 'amman/jordan',
        address2: 'amman/jordan',
        city: 'amman',
        state: 'amman',
        country: 'jordan',
        phone: '01447852252',
        type: 'shipping',
        zipcode: '0000'
      }
    }
  },
  {
    id: 7,
    name: 'Jordan VS Philippines | FIBA WorldCup Qualifying match',
    description: 'bla bla bla',
    briefDescription: 'bla bla bla',
    tags: 'test',
    active: true,
    startDate: '2022-11-20T12:03:10.723Z',
    endDate: '2022-11-25T12:03:10.723Z',
    startTime: '06:30:30',
    endTime: '07:30:30',
    privacy: 'public',
    status: 'draft',
    facebookLink: null,
    instagramLink: null,
    snapchatLink: null,
    eventCategory: {
      id: 1,
      name: 'category4',
      description: 'description1'
    },
    subcategory: {
      id: 1,
      name: 'sub test',
      description: 'desc2'
    },
    user: {
      id: 3,
      firstName: 'leen',
      lastName: 'qtieshat',
      email: 'leen20qtt@gmail.com',
      active: true,
      status: 'active',
      roleId: 'rol_Oaf18q3eJeVK3qCB',
      providerUserId: '64492d235ef9b25191581d32',
      homePhone: null,
      jopTitle: null,
      company: null,
      website: null,
      blog: null,
      imageId: null,
      saleTax: 4.5,
      organizerId: null,
      createdBy: null,
      updatedBy: null,
      createdAt: '2023-04-26T13:54:44.365Z',
      updatedAt: '2023-04-26T13:54:44.365Z',
      role_id: 'rol_Oaf18q3eJeVK3qCB',
      image_id: null,
      organizer_id: null
    },
    eventImages: [],
    eventTickets: [
      {
        id: 9,
        name: 'class A',
        description: 'class D',
        saleStartDate: '2022-05-10T00:00:00.000Z',
        saleEndDate: '2022-08-10T00:00:00.000Z',
        quantity: 5,
        price: 20,
        active: true,
        eventId: 7,
        createdBy: null,
        updatedBy: null,
        createdAt: '2023-04-26T14:22:44.493Z',
        updatedAt: '2023-04-26T14:22:44.493Z',
        event_id: 7
      },
      {
        id: 10,
        name: 'class B',
        description: 'class B',
        saleStartDate: '2022-05-10T00:00:00.000Z',
        saleEndDate: '2022-08-10T00:00:00.000Z',
        quantity: 15,
        price: 20,
        active: true,
        eventId: 7,
        createdBy: null,
        updatedBy: null,
        createdAt: '2023-04-26T14:22:44.493Z',
        updatedAt: '2023-04-26T14:22:44.493Z',
        event_id: 7
      }
    ],
    paymentPOS: [],
    PaymentMethods: [],
    eventDressCode: {
      id: 1,
      name: 'formal',
      description: 'formal dress code'
    },
    event_promotions: [],
    location: {
      id: 1,
      name: 'test coffe',
      reservedSeating: false,
      type: 'Venue',
      address: {
        id: 1,
        address1: 'amman/jordan',
        address2: 'amman/jordan',
        city: 'amman',
        state: 'amman',
        country: 'jordan',
        phone: '01447852252',
        type: 'shipping',
        zipcode: '0000'
      }
    }
  }
];

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});
  const [eventTickets, setEventTickets] = useState([]);
  const [eventPromotions, setEventPromotions] = useState([]);
  const size = 12;

  const userData = useSelector(state => state.auth.userData);
  const containerRef = useRef(null);
  const { getPOSEvents, getEventTickets, getEventPromotions, getUserAddress } = useEndpoints();
  const dispatch = useDispatch();

  const fetchPOSEvents = async (concat = false, query = '') => {
    try {
      setLoading(true);
      const userId = userData?.user_roles?.[0] === ORGANIZER ? userData?.user_metadata?.id : null;
      const response = await getPOSEvents(page, size, query, userId);
      extractResponseData(response, concat);
    } catch (err) {
      console.log('Error fetching events.', err);
    } finally {
      setLoading(false);
    }
  };
  const fetchUserAddress = async () => {
    const response = await getUserAddress(userData?.user_metadata?.id);
    console.log(response);
    localStorage.setItem('agentAddress', JSON.stringify(response?.[0]?.address || {}));
  };
  const onEventClick = async event => {
    try {
      const tickets = await getEventTickets(event.id);
      const promotions = await getEventPromotions(event.id);
      setEventTickets(tickets);
      setEventPromotions(promotions);
      setSelectedEvent(event);
      setShowModal(true);
    } catch (err) {
      console.log('Error fetching event tickets.', err);
    }
  };

  const setSelectedTickets = tickets => {
    try {
      //  hit API to set selected tickets
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

  const extractResponseData = (response, concat = true) => {
    const { count, page: resPage, rows } = response;
    totalItems = count;
    page = resPage;
    setEvents(concat ? [...events, ...rows] : rows);
  };

  const renderEventsList = () => {
    if (loading && !fakeData?.length) return <div className={responseHint}>Loading Events...</div>;
    if (!loading && !fakeData?.length) return <div className={responseHint}>No Current Events</div>;

    return fakeData?.map(event => {
      return (
        <div className={eventCardContainer}>
          <EventCard onEventClick={() => onEventClick(event)} key={event.id} eventData={event} />
        </div>
      );
    });
  };

  const handleScroll = () => {
    const container = containerRef.current;

    if (container.scrollTop + container.clientHeight < container.scrollHeight) return;

    if (totalItems > page * size && !loading) {
      const newPage = page + 1;
      if (newPage < Math.ceil(totalItems / size)) {
        page = newPage;
      }
      fetchPOSEvents(true);
    }
  };

  const handleSearchQueryChange = () => {
    window.scroll(0, 0);

    page = 0;
    fetchPOSEvents(false, searchQuery);
  };
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchPOSEvents(false);
    fetchUserAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSearchChange = e => {
    setSearchQuery(e.target.value);
    if (!e.target.value) {
      page = 0;
      fetchPOSEvents();
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
          promotionsList={eventPromotions}
          toggleModal={() => setShowModal(false)}
          onConfirm={setSelectedTickets}
        />
      </CSSTransition>
      <div className={eventsPageContainer}>
        <div className={searchContainer}>
          <TextField
            value={searchQuery}
            onChange={onSearchChange}
            className={searchInput}
            placeholder="Search for events, artists, and venues"
            label=""
          />
          <CommonButton className={searchButton} onClick={handleSearchQueryChange}>
            <Search />
            Search
          </CommonButton>
        </div>
        <EventTabs />
        <div ref={containerRef} className={eventsListContainer}>
          {renderEventsList()}
        </div>
      </div>
    </>
  );
};

export default Home;
