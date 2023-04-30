import { HIDE_MODAL, SHOW_MODAL } from '../actions/modal';

const initialState = {
  showModal: false,
  modalContent: {
    type: null,
    message: '',
    confirmButtonClick: null
  }
};

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return {
        showModal: true,
        modalContent: payload
      };

    case HIDE_MODAL:
      return {
        showModal: false,
        modalContent: {
          type: null,
          message: '',
          confirmButtonClick: null
        }
      };

    default:
      return state;
  }
};

export default modalReducer;
