import http from "../../http/http";
import { getEventTicketsRoute, getPOSEventsRoute, getEventPromotionsRoute } from "../routes/events";

const getPOSEvents = (page = 1, size = 12, search, userId) => {
  return http.get(getPOSEventsRoute(page, size, search, userId));
};

const getEventTickets = (eventId) => {
  return http.get(getEventTicketsRoute(eventId));
};

const getEventPromotions = async eventId => {
  return http.get(getEventPromotionsRoute(eventId));
};

const eventsEndpoints = {
  getPOSEvents,
  getEventTickets,
  getEventPromotions
};

export default eventsEndpoints;
