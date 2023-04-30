import { useState } from "react";
import Input from "../../CoreUI/TextField";
import Button from "../../CoreUI/Button";
import formValidations from "../../common/formValidations";
import styles from "./styles.module.scss";

const {
  LoginFormCard,
  loginButton,
  loginField,
  invalidLoginMessage,
  cardTitle,
} = styles;

const InputsValidator = {
  email: (value) =>
    formValidations.email(value, "email", { withErrorMessage: true }),
  password: (value) =>
    formValidations.minLength(value, "password", {
      withErrorMessage: true,
      minLengthParam: 8,
    }),
};

const LoginForm = ({
  onSubmit = () => {},
  loading = false,
  loginInvalid = false,
}) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: null, password: null });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const applyFieldValidation = (fieldName, value) => {
    const { isValid, message } = InputsValidator[fieldName](value);
    setErrors((prevState) => ({
      ...prevState,
      [fieldName]: isValid ? null : message,
    }));
  };

  const handleFormSubmit = () => {
    let error = false;
    const newErrors = { ...errors };
    if (!loginData.email) {
      error = true;
      newErrors.email = "Email is required";
    } else {
      newErrors.email = null;
    }
    if (!loginData.password) {
      error = true;
      newErrors.password = "Password is required";
    } else {
      newErrors.password = null;
    }
    setErrors(newErrors);
    if (!error) {
      onSubmit(loginData);
    }
  };

  const commonInputProps = {
    className: loginField,
    onChange: handleDataChange,
    required: true,
    onBlur: ({ target }) => applyFieldValidation(target.name, target.value),
  };

  return (
    <form className={LoginFormCard}>
      <div>
        <h5 className={cardTitle}>Log in</h5>
        {loginInvalid && (
          <p className={invalidLoginMessage}>
            Invalid email or password, please try again.{" "}
          </p>
        )}
        <Input
          {...commonInputProps}
          name="email"
          label="Email"
          placeholder="Please enter your email"
          type="email"
          id="email"
          error={errors.email}
        />
        <Input
          {...commonInputProps}
          name="password"
          label="Password"
          placeholder="Please enter your password"
          type="password"
          id="password"
          error={errors.password}
        />
      </div>
      <Button
        disabled={errors.email || errors.password}
        onClick={handleFormSubmit}
        className={loginButton}
        loading={loading}
      >
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
