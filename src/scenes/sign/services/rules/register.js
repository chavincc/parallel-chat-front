export const requiredFieldRule = () => ({
  required: true,
  message: 'field is required',
});

export const usernameRule = () => ({
  pattern: new RegExp(/^[0-9a-zA-Z_]*$/),
  message: 'only contain a-z , 0-9',
});

export const nameRule = () => ({
  pattern: new RegExp(/^[A-Za-z ]*$/),
  message: 'only contain a-z , space',
});

export const passwordRule = () => ({
  pattern: new RegExp(/.{8,}/),
  message: 'length atleast 8 character',
});

export const emailRule = () => ({
  pattern: new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
  message: 'does not match email pattern',
});
