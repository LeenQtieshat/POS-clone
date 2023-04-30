import React from "react";
import CommonButton from "../../../CoreUI/Button";
import Edit from "../../../svgComponents/components/Edit";
import Ticket from "./Ticket";
import styles from "./styles.module.scss";

const { container, containerHeader, title, body, row, editBtn, icon } = styles;
export default function SelectedEventTickets({
  eventId = 0,
  eventName = "",
  tickets = [],
  onEditEventClick = () => {},
  discountAmount = 0,
  totalPrice = 0,
}) {
  const renderTickets = () =>
    tickets?.map((item) => {
      const { id, total, pickedQuantity, name } = item;
      return (
        <Ticket key={id} price={total} quantity={pickedQuantity} name={name} />
      );
    });
  const renderEventTickets = () => {
    return (
      <div className={body}>
        {renderTickets()}
        {!!discountAmount && (
          <div className={row}>
            <span>Discount</span>
            <span>JOD {discountAmount.toFixed(2)}</span>
          </div>
        )}

        <div className={row}>
          <span>Subtotal</span>
          <span>JOD {totalPrice.toFixed(2)}</span>
        </div>
      </div>
    );
  };
  const getEventName = () =>
    `${eventName.substring(0, 58)}${eventName.length >= 58 ? "..." : ""}`;
  return (
    <div className={container}>
      <header className={containerHeader}>
        <span className={title}>{getEventName()}</span>
        <CommonButton
          onClick={onEditEventClick}
          className={editBtn}
          color="white"
          prefixIcon={<Edit className={icon} />}
          children={"Edit"}
        />
      </header>
      {renderEventTickets()}
    </div>
  );
}
