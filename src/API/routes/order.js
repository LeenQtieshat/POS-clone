import { ORDER, ORDER_CONFIRMATION } from '../baseURL';

export const addOrderRoute = () => `${ORDER}`;

export const postPaymentConfirmationRoute = () => `${ORDER}${ORDER_CONFIRMATION}`;
