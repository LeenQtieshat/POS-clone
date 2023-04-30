import React from "react";
import styles from "./styles.module.scss";

const { container, row, title, value, boldText } = styles;
export default function OrderSummary({
  totalDiscount = 0,
  taxValue = 0,
  total = 0,
}) {
  return (
    <div className={container}>
      <div className={row}>
        <span className={title}>Total Discount</span>
        <span className={value}>JOD {totalDiscount.toFixed(2)}</span>
      </div>
      <div className={row}>
        <span className={title}>Sales Tax</span>
        <span className={value}>JOD {taxValue}</span>
      </div>
      <div className={row}>
        <span className={`${title} ${boldText}`}>Total</span>
        <span className={`${value} ${boldText}`}>JOD {total.toFixed(2)}</span>
      </div>
    </div>
  );
}
