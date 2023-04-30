import {
  CLEAR_SELECTED_TICKETS,
  SET_SELECTED_TICKETS,
} from "../actions/selectedTickets";
import { getSelectedTickets } from "../../helpers/getSelectedTickets";

const initialState = {
  selectedTickets: { ...getSelectedTickets() },
};

const selectedTicketsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_TICKETS:
      return {
        ...state,
        selectedTickets: {
          ...state.selectedTickets,
          [payload?.id]: payload,
        },
      };

    case CLEAR_SELECTED_TICKETS:
      return {
        ...state,
        selectedTickets: {},
      };

    default:
      return state;
  }
};

export default selectedTicketsReducer;
