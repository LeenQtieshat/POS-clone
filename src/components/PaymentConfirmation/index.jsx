import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { CheckCircleFilled, MailOutlined, PrinterOutlined, CheckOutlined } from '@ant-design/icons';
import CommonButton from '../../CoreUI/Button';
import OrderReceipt from '../OrderReceipt';

import styles from './styles.module.scss';

const {
  headingContainer,
  receiptContainer,
  confirmationOptions,
  receiptOptions,
  printReceiptButton,
  emailSent,
  emailButton,
  backToHomeButton,
  confirmMsgContainer,
  confirmMsg
} = styles;

const PaymentConfirmation = ({ confirmationData }) => {
  const [isEmailSent, setisEmailSent] = useState(false);
  const receiptRef = useRef();
  const navigate = useNavigate();

  const handleEmail = async () => setisEmailSent(true);

  const handlePrint = useReactToPrint({
    content: () => receiptRef.current
  });

  const backToHomeHandler = () => {
    localStorage.removeItem('confirmationData');
    localStorage.removeItem('selectedTickets');
    navigate('/', { replace: true });
  };
  return (
    <>
      <div className={headingContainer}>
        <div className={confirmationOptions}>
          <p className={confirmMsgContainer}>
            <CheckCircleFilled />
            <span className={confirmMsg}>Payment done successfully!</span>
          </p>
          <div className={receiptOptions}>
            <CommonButton
              className={printReceiptButton}
              prefixIcon={<PrinterOutlined />}
              onClick={handlePrint}
            >
              Print receipt
            </CommonButton>
            <CommonButton
              className={isEmailSent ? emailSent : emailButton}
              prefixIcon={isEmailSent ? <CheckOutlined /> : <MailOutlined />}
              onClick={handleEmail}
            >
              Email receipt
            </CommonButton>
          </div>
          <div>
            <CommonButton className={backToHomeButton} onClick={backToHomeHandler}>
              Back to home
            </CommonButton>
          </div>
        </div>
      </div>
      <div className={receiptContainer}>
        <OrderReceipt
          ref={receiptRef}
          isEmailSent={isEmailSent}
          confirmationData={confirmationData}
        />
      </div>
    </>
  );
};

export default PaymentConfirmation;
