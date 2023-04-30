import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  formFieldWidth,
  formComponentsMap,
  getFormFieldsValues,
  initFormFieldErrors,
  isInputsDirty,
  isInputsTouched,
  isInputsValid,
} from "./formHelpers";
import formValidations from "../../common/formValidations";
import CommonButton from "../Button";
import Box from "../Box";
import { array, bool, func, object, string } from "prop-types";

const { form, formActions, formButton, formHeader, formTitleText } = styles;

const Form = ({
  formFields,
  formData = getFormFieldsValues(formFields),
  editMode,
  submitButton = { text: "submit", color: "primary" },
  secondaryButton,
  onSubmit = () => {},
  formTitle = "create new item",
  className = "",
  children,
  formActionClassName,
  formClassName = "",
}) => {
  const [formFieldsValue, setFormFieldsValue] = useState(formData);

  const [formFieldErrors, setFormFieldErrors] = useState(
    initFormFieldErrors(formFields, editMode)
  );

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setFormFieldsValue({ ...formData });
    setFormFieldErrors(initFormFieldErrors(formFields, editMode));

    /* eslint-disable */
  }, [editMode]);

  const handleComparableFieldChange = (field) => {
    if (field.validationParams && field.validationParams.compareWith) {
      const comparableField = formFields.find(
        (formField) => formField.props.name === field.props.name
      );
      comparableField.validationParams.comparedValue =
        formFieldsValue[comparableField.validationParams.compareWith];
    }
  };

  const updateFormFieldValues = (target, field) => {
    const valuesClone = { ...formFieldsValue };
    valuesClone[field.props.name] = target.value;
    setFormFieldsValue(valuesClone);
  };

  const handleFormFieldValidation = (
    { target },
    field,
    withErrorMessages = true
  ) => {
    const newFormFieldErrors = { ...formFieldErrors };
    field.validations.every((validation) => {
      const { isValid, message } = formValidations[validation](
        target.value,
        field.props.label,
        {
          withErrorMessage: withErrorMessages,
          ...field.validationParams,
        }
      );

      const isDirty = editMode
        ? formData[field.props.name] !== target.value
        : !!target.value;

      if (!isValid) {
        newFormFieldErrors[field.props.name] = {
          isValid,
          message,
          touched: true,
          dirty: isDirty,
        };

        return false;
      }
      newFormFieldErrors[field.props.name] = {
        isValid: true,
        message: null,
        touched: true,
        dirty: isDirty,
      };

      return true;
    });
    setFormFieldErrors(newFormFieldErrors);
    setIsFormValid(getIsFormValid(newFormFieldErrors));
  };
  const handleFormFieldChange = ({ target }, field) => {
    updateFormFieldValues(target, field);
    handleComparableFieldChange(field);
    handleFormFieldValidation({ target }, field, false);
  };

  const getIsFormValid = (newFormFieldErrors) => {
    let validInputs = isInputsValid(newFormFieldErrors);
    let touchedInputs = isInputsTouched(newFormFieldErrors);
    if (editMode) {
      let inputsDirty = isInputsDirty(newFormFieldErrors);

      return touchedInputs && validInputs && inputsDirty;
    }
    return touchedInputs && validInputs;
  };

  return (
    <>
      {!!formTitle && (
        <div className={formHeader}>
          <h5 className={formTitleText}>{formTitle}</h5>
        </div>
      )}
      <Box className={className}>
        <form className={`${form} ${formClassName}`}>
          {formFields.map((field, index) => {
            const formComponent = formComponentsMap[field.component];
            const valueProp =
              field.component === "checkbox"
                ? { checked: formFieldsValue[field.props.name] || false }
                : { value: formFieldsValue[field.props.name] || "" };

            return (
              <formComponent.component
                key={index}
                {...formComponent.props}
                {...field.props}
                width={formFieldWidth[field.width || "full"]}
                onChange={(e) => handleFormFieldChange(e, field)}
                onBlur={(e) => handleFormFieldValidation(e, field, true)}
                error={formFieldErrors[field.props.name].message}
                {...valueProp}
              />
            );
          })}
          {children}
          <div className={`${formActions} ${formActionClassName}`}>
            {secondaryButton && (
              <CommonButton
                children={secondaryButton.text}
                color={secondaryButton.color}
                type="button"
                onClick={secondaryButton.onClick}
                className={formButton}
              />
            )}
            <CommonButton
              children={editMode ? "Save Changes" : submitButton.text}
              disabled={!isFormValid}
              color={submitButton.color || "primary"}
              onClick={() => onSubmit(formFieldsValue)}
              className={`${formButton} ${submitButton.className || ""}`}
              type="button"
            />
          </div>
        </form>
      </Box>
    </>
  );
};

Form.propTypes = {
  formFields: array,
  formData: object,
  editMode: bool,
  submitButton: object,
  secondaryButton: object,
  onSubmit: func,
  formTitle: string,
  className: string,
};

export default Form;
