import React from "react";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
import { bool, func, string } from "prop-types";
import { CheckOutlined } from "@ant-design/icons";

const { checkboxContainer, checkboxInput, checkboxLabel, checkboxIcon } =
  styles;

const Checkbox = (props) => {
  const {
    label = "",
    id = uuidv4(),
    onChange = () => {},
    className = "",
    width,
    checked = false,
  } = props;

  return (
    <div className={`${checkboxContainer} ${className} ${width}`}>
      <input
        checked={checked}
        {...props}
        onChange={(e) =>
          onChange({ ...e, target: { ...e, value: e.target.checked } })
        }
        id={id}
        className={checkboxInput}
        type="checkbox"
      />
      <label htmlFor={id} className={checkboxLabel}>
        {label}
        <span className={checkboxIcon}>
          <CheckOutlined />
        </span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: string,
  id: string,
  onChange: func,
  className: string,
  width: string,
  checked: bool,
};

export default Checkbox;
