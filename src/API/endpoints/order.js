import http from '../../http/http';
import { addOrderRoute, postPaymentConfirmationRoute } from '../routes/order';

const addOrder = async data => {
  return await http.post(addOrderRoute(), data);
};

const postPaymentConfirmationEmail = ({ to, data }) => {
  return http.post(postPaymentConfirmationRoute(), { to, data });
};

const orderEndpoints = { addOrder, postPaymentConfirmationEmail };

export default orderEndpoints;
