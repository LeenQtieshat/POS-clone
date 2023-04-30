import { useState, useEffect } from "react";
import { Plus, Minus } from "../../svgComponents";
import styles from "./styles.module.scss";
import formStyles from "../../styles/form.module.scss";
const { inputLabel } = formStyles;
const {
  inputContainer,
  counter,
  counterValues,
  counterContainer,
  controlButton,
} = styles;

const Counter = ({
  onChange = () => {},
  value = 0,
  label,
  min = 0,
  width,
  name,
  max = 1000,
  step = 1,
}) => {
  const [counterValue, setCounterValue] = useState(value);
  useEffect(() => {
    setCounterValue(+value || 0);
  }, [value]);

  const increaseCounter = () => {
    const newCounterValue = parseInt(counterValue + step);
    if (newCounterValue <= max) {
      setCounterValue(newCounterValue);
      onChange({ target: { value: newCounterValue, factor: 1, name: name } });
    }
  };

  const decreaseCounter = () => {
    const newCounterValue = parseInt(counterValue) - step;
    if (newCounterValue >= min) {
      setCounterValue(newCounterValue);
      onChange({ target: { value: newCounterValue, factor: -1, name: name } });
    }
  };
  const onNumberChange = ({ target: { value } }) => {
    if (+value > min && +value <= max)
      return onChange({ target: { value: value, factor: 1, name: name } });
    if (+value > max) {
      setCounterValue(max);
    } else {
      setCounterValue(0);
    }
  };
  return (
    <div className={`${inputContainer} ${width}`}>
      <span className={inputLabel}> {label}</span>
      <div className={counter}>
        <button
          className={controlButton}
          onClick={decreaseCounter}
          type="button"
        >
          <Minus />
        </button>

        <div className={counterContainer}>
          <input
            type="number"
            onWheel={(event) => event.currentTarget.blur()}
            name={name}
            className={counterValues}
            value={counterValue}
            onChange={onNumberChange}
            min={0}
            max={max}
          />
        </div>

        <button
          className={controlButton}
          onClick={increaseCounter}
          type="button"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default Counter;
