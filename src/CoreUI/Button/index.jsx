import { func, node, string } from "prop-types";
import React from "react";
import styles from "./styles.module.scss";
import { LoadingOutlined } from "@ant-design/icons";

const {
  button,
  buttonPrimary,
  buttonWhite,
  buttonGrey,
  buttonDanger,
  buttonWarning,
  buttonTextPrimary,
  buttonTextGrey,
  buttonTextDanger,
  buttonTextWarning,
  buttonTextDark,
} = styles;

const buttonColors = {
  primary: buttonPrimary,
  white: buttonWhite,
  grey: buttonGrey,
  danger: buttonDanger,
  warning: buttonWarning,
  textPrimary: buttonTextPrimary,
  textGrey: buttonTextGrey,
  textDanger: buttonTextDanger,
  textWarning: buttonTextWarning,
  textDark: buttonTextDark,
};

const CommonButton = ({
  onClick = () => {},
  className = "",
  color = "primary",
  prefixIcon = null,
  suffixIcon = null,
  children,
  loading = false,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`${button} ${buttonColors[color]} ${className}  `}
      {...rest}
      disabled={loading || rest.disabled}
    >
      {prefixIcon}
      {children}
      {suffixIcon}
      {loading && <LoadingOutlined spin />}
    </button>
  );
};

CommonButton.propTypes = {
  label: string,
  onClick: func,
  className: string,
  icon: node,
  color: string,
};

export default CommonButton;
