import moment from "moment";
import { Calendar, Location } from "../../svgComponents";
import defaultEventImage from "../../assets/images/event_img.jpg";

import styles from "./styles.module.scss";

const {
  imageContainer,
  image,
  info,
  infoHeader,
  titleContainer,
  timeContainer,
  datePlaceContainer,
  cardContainer,
  locationContainer,
  eventPrice,
  saleTag,
} = styles;

const EventCard = ({
  eventData: { images, name, location, startDate, price, sale, tickets },
  onEventClick = () => {},
}) => {
  const mainImage = images?.masthead || defaultEventImage;

  const getEventTime = (time) => {
    return moment(time).format("ddd, MMM DD, h:mm A");
  };

  const getLowestTicketPrice = () => {
    if (tickets?.length) {
      const prices = tickets?.map((ticket) => ticket.price);
      return Math.min(...prices);
    }
    return 0;
  };

  return (
    <div onClick={onEventClick} className={cardContainer}>
      <div className={imageContainer}>
        <img className={image} src={mainImage} alt={name} />
        {sale && <span className={saleTag}> {sale}% Sale </span>}
      </div>
      <div className={info}>
        <div className={infoHeader}>
          <h5 className={titleContainer}> {name} </h5>
          <div className={datePlaceContainer}>
            <span className={timeContainer}>
              <Calendar /> {getEventTime(startDate)}{" "}
            </span>
            <span className={locationContainer}>
              <Location /> {location?.address.address1},{" "}
              {location?.address.city}, {location?.address.country}
            </span>
          </div>
          <span className={eventPrice}>
            Starting From {getLowestTicketPrice()} JOD
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
