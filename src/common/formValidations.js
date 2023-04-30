const validationMessages = {
  required: name => `${name} is required`,
  email: () => 'You have entered an invalid email, please try again',
  compareValue: () => "Passwords don't match",
  minLength: (name, minLengthParam) =>
    `${name} should be more than or equal ${minLengthParam} characters`,
  maxLength: (name, maxLengthParam) =>
    `${name} should be less than or equal ${maxLengthParam} characters`,
  greaterThanToday: name => `${name} should be greater than or equal today`,

  getMessage: function (withErrorMessage, messageType, ...args) {
    return withErrorMessage ? this[messageType](...args) : '';
  }
};

const formValidations = {
  required: (value, name = '', { withErrorMessage }) => {
    return {
      isValid: !!value,
      message: validationMessages.getMessage(withErrorMessage, 'required', name)
    };
  },
  email: (value, name, { withErrorMessage }) => {
    if (!value) {
      return {
        isValid: false,
        message: validationMessages.getMessage(withErrorMessage, 'required', name)
      };
    }

    const emailRegex =
      /* eslint-disable-next-line */
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return {
      isValid: emailRegex.test(value),
      message: validationMessages.getMessage(withErrorMessage, 'email')
    };
  },
  compareValue: (value, name = '', { withErrorMessage, ...validationParams }) => {
    const { comparedValue } = validationParams;
    if (!value) {
      return {
        isValid: false,
        message: validationMessages.getMessage(withErrorMessage, 'required', name)
      };
    }
    if (value.length !== comparedValue.length) {
      return {
        isValid: false,
        message: validationMessages.getMessage(withErrorMessage, 'compareValue')
      };
    }
    return {
      isValid: value === comparedValue,
      message: validationMessages.getMessage(withErrorMessage, 'compareValue')
    };
  },
  minLength: (value, name = '', { withErrorMessage, ...validationParams }) => {
    const { minLengthParam } = validationParams;
    if (!value) {
      return {
        isValid: false,
        message: validationMessages.getMessage(withErrorMessage, 'required', name)
      };
    }
    return {
      isValid: value.length >= minLengthParam,
      message: validationMessages.getMessage(withErrorMessage, 'minLength', name, minLengthParam)
    };
  },
  maxLength: (value, name = '', { withErrorMessage, ...validationParams }) => {
    const { maxLengthParam } = validationParams;
    if (!value) {
      return {
        isValid: false,
        message: validationMessages.getMessage(withErrorMessage, 'required', name)
      };
    }
    return {
      isValid: value.length <= maxLengthParam,
      message: validationMessages.getMessage(withErrorMessage, 'maxLength', name, maxLengthParam)
    };
  },
  greaterThanToday: (value, name = '', { withErrorMessage }) => {
    if (!value) {
      return {
        isValid: false,
        message: validationMessages.getMessage(withErrorMessage, 'required', name)
      };
    }
    return {
      isValid: new Date(value).getTime() > new Date().getTime(),
      message: validationMessages.getMessage(withErrorMessage, 'greaterThanToday', name)
    };
  }
};

export default formValidations;
