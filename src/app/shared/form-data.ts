export const FORM_ERRORS = {
  login: '',
  password: '',
};

export const FORM_VALIDATION_MESSAGES = {
  login: {
    required: 'Логин обязателен!',
    minlength: 'Логин должен содержать не менее 3 символа.',
    maxlength: 'Логин должен содержать не более 15 символа.',
  },
  password: {
    required: 'Пароль обязателен!',
    minlength: 'Пароль должен содержать не менее 5 символа.',
    maxlength: 'Пароль должен содержать не более 25 символа.',
  },
};
