import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';
import useEndpoints from '../../hooks/useEndpoints';
import orderFakeDetails from './__mock__';
import styles from './styles.module.scss';

const {
  receiptDetails,
  customerName,
  row,
  eventTitle,
  rowTitle,
  ticketTitle,
  rowValue,
  rowLayout,
  paymentSummaryRowLayout,
  shortLengthBorder,
  paymentSummary,
  shortThickBorder,
  agentInfo,
  salesTax,
  totalPrice,
  agentLocation
} = styles;

const OrderReceipt = React.forwardRef(({ isEmailSent, confirmationData }, ref) => {
  const email = useSelector(state => state?.auth?.userData?.email);
  const { postPaymentConfirmationEmail } = useEndpoints();

  useEffect(() => {
    if (isEmailSent) {
      //  Later will add the order details to the reqObj
      (async () => {
        const reqObj = {
          to: confirmationData.customerInfo.email,
          data: confirmationData
        };
        try {
          await postPaymentConfirmationEmail(reqObj);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [isEmailSent]);

  const renderTicketsDetails = [
    ...confirmationData.events.map(event => (
      <div className={`${eventTitle} ${row}`} key={event.id}>
        {event.name}
        {event.selectedTickets.map(ticket => (
          <div className={ticketTitle} key={ticket.id}>
            <div className={rowTitle}>
              {ticket.pickedQuantity}
              <CloseOutlined /> {ticket.name}
            </div>
            <div className={rowValue}>
              {orderFakeDetails.currency} {ticket.price}
            </div>
          </div>
        ))}
        <div className={shortLengthBorder}></div>
      </div>
    ))
  ];

  const renderUsersDetails = Object.entries(confirmationData).map((item, idx) => {
    return item[0] == 'customerInfo' ? (
      <div className={`${row} ${customerName}`} key={idx}>
        {`Customer: ${item[1].firstName} ${item[1].lastName} `}
        <div className={shortLengthBorder}></div>
      </div>
    ) : item[0] === 'agentInfo' ? (
      <div className={`${row} ${agentInfo}`} key={idx}>
        <div>Agent: {item[1].name}</div>
        <div className={agentLocation}>{item[1].location?.address1 || 'agent location'}</div>
        <div className={shortLengthBorder}></div>
      </div>
    ) : null;
  });
  const renderPaymentSummary = Object.entries(confirmationData).map((item, idx) => {
    return item[0] === 'paymentSummary' ? (
      <div className={`${row} ${paymentSummary}`} key={idx}>
        {[
          ...Object.entries(item[1]).map((payment, idx) => {
            return (
              <div className={`${rowLayout} ${paymentSummaryRowLayout}`} key={idx}>
                <div className={`${rowTitle} ${salesTax} ${idx == 2 ? totalPrice : ''}`}>
                  {payment[0] == 'salesTax'
                    ? `sales Tax (${payment[1].replace('JOD', '')})`
                    : payment[0]}
                </div>
                <div className={`${rowValue} ${idx == 2 ? totalPrice : ''}`}>
                  {payment[0] == 'salesTax'
                    ? `${
                        confirmationData.currency
                      } ${confirmationData.paymentSummary.salesTax.replace('JOD', '')}`
                    : `${confirmationData.currency} ${payment[1]}`}
                </div>
              </div>
            );
          })
        ]}
      </div>
    ) : null;
  });

  const renderPaymentMethodDetails = (
    <>
      <div className={`${row} ${rowLayout}`}>
        <div className={rowTitle}> Payment Method </div>
        <div className={rowValue}> {confirmationData.paymentMethod.method}</div>
        <div className={shortThickBorder}></div>
      </div>
    </>
  );

  return (
    <div className={receiptDetails} ref={ref} id="receiptDetails">
      {renderUsersDetails}
      {renderTicketsDetails}
      {renderPaymentMethodDetails}
      {renderPaymentSummary}
    </div>
  );
});
export default OrderReceipt;
