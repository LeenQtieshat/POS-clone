import React from "react";
import styles from "./styles.module.scss";

const { row, ticketQuantity, ticketName, ticketPrice } = styles;
export default function Ticket({ quantity, name, price }) {
  return (
    <div className={row}>
      <span className={ticketQuantity}>{quantity}x</span>
      <span className={ticketName}>{name}</span>
      <span className={ticketPrice}>{`JOD ${price}`}</span>
    </div>
  );
}
