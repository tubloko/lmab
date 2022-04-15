import { makeVar } from '@apollo/client';

export const registerFieldsVar = makeVar({
  isDisabled: false,
  accessToken: '',
  googleId: '',
  name: '',
  email: '',
  password: '',
});