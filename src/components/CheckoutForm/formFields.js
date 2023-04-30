

export const formFields = [
  {
    component: "textInput",
    props: {
      label: 'First Name',
      name: 'firstName',
      id: 'firstName',
      value: '',
      placeholder: 'First Name'
    },
    width: 'half',
    validations: ['required'],
    skipInitialValidation: true
  },
  {
    component: "textInput",
    props: {
      id: 'lastName',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      placeholder: 'Last Name'
    },
    width: 'half',
    validations: ['required'],
    skipInitialValidation: true
  },
  {
    component: 'email',
    props: {
      id: 'email',
      name: 'email',
      label: 'Email',
      value: '',
      placeholder: 'name@email.com'
    },
    width: 'full',
    validations: ['email'],
    skipInitialValidation: true
  },
  {
    component: "textInput",
    props: {
      label: 'Mobile',
      name: 'phone',
      id: 'phone',
      value: '',
      placeholder: '07xxxxxxxx'
    },
    width: 'full',
    validations: ['required'],
    skipInitialValidation: true
  }
];