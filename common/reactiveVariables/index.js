import { makeVar } from '@apollo/client';

export const registerFieldsVar = makeVar({
  isDisabled: false,
  name: '',
  email: '',
  password: '',
});