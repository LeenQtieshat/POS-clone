import { combineReducers } from "redux";
import modalReducer from "./modal";
import authReducer from "./auth";
import selectedTicketsReducer from "./selectedTickets";

const allReducers = combineReducers({
  modal: modalReducer,
  auth: authReducer,
  selectedTickets: selectedTicketsReducer,
});

export default allReducers;
