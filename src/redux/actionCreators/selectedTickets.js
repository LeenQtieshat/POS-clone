import {
  CLEAR_SELECTED_TICKETS,
  SET_SELECTED_TICKETS,
} from "../actions/selectedTickets";

export const setSelectedTickets = (payload) => {
  return {
    type: SET_SELECTED_TICKETS,
    payload,
  };
};

export const clearSelectedTickets = () => {
  return {
    type: CLEAR_SELECTED_TICKETS,
  };
};
