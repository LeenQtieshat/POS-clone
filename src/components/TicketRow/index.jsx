import { useState } from "react";
import Counter from "../../CoreUI/Counter";

import styles from "./styles.module.scss";
const { ticketRowContainer, ticketRowCell } = styles;

const TicketRow = ({
  ticket: { name, price, remainingTickets, id, pickedQuantity },
  onTotalChange = () => {},
}) => {
  const [total, setTotal] = useState(
    pickedQuantity ? price * pickedQuantity : 0
  );

  const onQuantityChange = ({ target: { factor, value } }) => {
    const newTotal = price * value;
    setTotal(newTotal);
    onTotalChange({ total: newTotal, id: id, quantity: value, price });
  };

  return (
    <div className={ticketRowContainer}>
      <span className={ticketRowCell}> {name}</span>
      <span className={ticketRowCell}> JOD {price} </span>
      <div className={ticketRowCell}>
        <Counter
          min={1}
          onChange={onQuantityChange}
          max={remainingTickets}
          value={pickedQuantity || 0}
        />
      </div>
      <span className={ticketRowCell}>
        JOD {total || pickedQuantity * price || 0}
      </span>
    </div>
  );
};

export default TicketRow;
