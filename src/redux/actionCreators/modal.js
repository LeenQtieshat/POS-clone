import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal';

const showModal = payload => {
  return {
    type: SHOW_MODAL,
    payload
  };
};

const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
};

export { showModal, hideModal };
