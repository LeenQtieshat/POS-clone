import PaymentConfirmation from '../../components/PaymentConfirmation';
import styles from './styles.module.scss';

const { confirmOrderContainer } = styles;

const Confirmation = () => {
  const confirmationData = JSON.parse(localStorage.getItem('confirmationData'));
  return (
    <div className={confirmOrderContainer}>
      <PaymentConfirmation confirmationData={confirmationData} />
    </div>
  );
};

export default Confirmation;
