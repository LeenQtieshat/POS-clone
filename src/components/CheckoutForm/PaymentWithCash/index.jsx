import React from "react";
import styles from "./styles.module.scss";

const { label, title, inputWrapper, input, currency } = styles;
export default function PaymentWithCash({
  cashAmount = null,
  onChange = () => {},
}) {
  return (
    <label className={label}>
      <span className={title}>Cash Amount</span>
      <div className={inputWrapper}>
        <span className={currency}>JOD</span>
        <input
          placeholder="e.g. 50"
          className={input}
          value={cashAmount}
          onChange={onChange}
        />
      </div>
    </label>
  );
}
