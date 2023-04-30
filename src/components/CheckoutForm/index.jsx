import React from "react";
import Form from "../../CoreUI/Form";
import { formFields } from "./formFields";
import { Close } from "../../svgComponents";
import styles from "./styles.module.scss";

const {
  checkoutOverlay,
  container,
  header,
  formBox,
  formAction,
  submitBtn,
  totalAmountTitle,
  totalAmountValue,
  form,
  modalCloseContainer,
  closeButton,
  checkoutOverlayBody,
} = styles;
export default function CheckoutForm({
  toggleModal = () => {},
  totalAmount,
  selectedTicketsArray = [],
  checkoutHandler,
}) {
  // <div className={buttonWrapper}>
  //           <CommonButton
  //             children={"Cash"}
  //             prefixIcon={<Cash />}
  //             color="white"
  //             className={`${button} ${payByCash && activeBtn}`}
  //             role="button"
  //             type="button"
  //             onClick={() => {
  //               setPayByCash(true);
  //             }}
  //           />
  //           <CommonButton
  //             children={"Card"}
  //             disabled={payByCash}
  //             role="button"
  //             type="button"
  //             className={button}
  //             prefixIcon={<CreditCard />}
  //           />
  //         </div>
  //         <PaymentWithCash
  //           cashAmount={cashAmount}
  //           onChange={cashAmountChangeHandler}
  //         />
  const submitHandler = async (data) => {
    checkoutHandler(data);
  };
  return (
    <div className={checkoutOverlay}>
      <div className={checkoutOverlayBody}>
        <div className={modalCloseContainer}>
          <span onClick={toggleModal} className={closeButton}>
            <Close /> Close
          </span>
        </div>
        <div className={container}>
          <header className={header}>
            <span className={totalAmountTitle}>Total Amount</span>
            <span className={totalAmountValue}>JOD {totalAmount}</span>
          </header>
          <Form
            formFields={formFields}
            formTitle=""
            submitButton={{ text: "Confirm", className: submitBtn }}
            formActionClassName={formAction}
            className={formBox}
            formClassName={form}
            onSubmit={submitHandler}
          />
        </div>
      </div>
    </div>
  );
}
