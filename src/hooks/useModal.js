import { useDispatch } from 'react-redux';
import {
  showModal as showModalAction,
  hideModal as hideModalAction
} from '../redux/actionCreators/modal';

const useModal = () => {
  const dispatch = useDispatch();

  const showModal = modalContent => {
    dispatch(showModalAction(modalContent));
  };

  const hideModal = () => {
    dispatch(hideModalAction());
  };

  return { showModal, hideModal };
};

export default useModal;
