import React, { useState } from "react";
import styles from "./styles.module.scss";
import formStyles from "../../styles/form.module.scss";
import Animate from "../Animate";
import { bool, string } from "prop-types";
import { Eye, EyeLined } from "../../svgComponents";

const { textField, textFieldInput, requiredStar, passwordEye } = styles;

const { hasError, fieldError, inputLabel, formInput } = formStyles;

const TextField = ({
  label,
  id = "text-field",
  className = "",
  errorClassName= "",
  error = false,
  multiline = false,
  width,
  required = false,
  inputClassName="",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className={`${textField} ${className} ${width} ${error ? hasError : ""} `}
    >
     {label && <label className={inputLabel} htmlFor={id}>
        {label} {required && <span className={requiredStar}>*</span>}
      </label>}
      {multiline ? (
        <textarea className={textFieldInput} id={id} type="text" {...props} />
      ) : (
        <input
          autoComplete="off"
          className={`${formInput} ${textFieldInput} ${inputClassName}`}
          id={id}
          {...props}
          type={showPassword ? "text" : props.type}
        />
      )}
      {props.type && props.type === "password" && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className={passwordEye}
        >
          {showPassword ? <EyeLined /> : <Eye />}
        </span>
      )}
      <Animate animationType="fadeUpDown" showsIn={!!error}>
        <span className={`${fieldError} ${errorClassName}`}>{error}</span>
      </Animate>
    </div>
  );
};

TextField.propTypes = {
  label: string,
  id: string,
  className: string,
  error: bool,
  multiline: bool,
  width: string,
};

export default TextField;
