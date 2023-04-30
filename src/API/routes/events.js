import { EVENTS } from '../baseURL';

export const getPOSEventsRoute = (page, size, search, userId) => {
  const searchQuery = search ? `&search=${search}` : '';
  const userIdFormatter = userId ? `&userId=${userId}` : '';
  return `${EVENTS}?${userIdFormatter}&page=${page}&size=${size}${searchQuery}`;
};

export const getEventTicketsRoute = eventId => `${EVENTS}/${eventId}/tickets`;

export const getEventPromotionsRoute = eventId => `${EVENTS}/${eventId}/promotions`;
