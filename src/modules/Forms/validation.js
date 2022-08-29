export const required = (field) => (value) => {
  if (!value) {
    return `${field} is required`;
  }
};

export const email = (value) => {
  // Taken from https://emailregex.com/
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(value)) {
    return `Should be a valid email`;
  }
};

// TODO: move min/max validations to a separate validator function
// At least 8 characters in length, but no more than 16.
// no special characters
export const username = (value) => {
  const spaceRegex = /\s/;
  if (spaceRegex.test(value)) {
    return `Should not contain spaces`;
  }

  const valueLength = value.length;
  if (valueLength <= 8 || valueLength >= 32) {
    return 'Should be between 8 and 16 characters in length';
  }

  if (/[*.!@#$%^&(){}[\]:;<>,.?/~_\+\-=|\\]+/.test(value)) {
    return 'Should not contain special characters [*.!@#$%^&(){}[]:;<>,.?/~_+-=|\\]';
  }
};

// At least one digit [0-9]
// At least one lowercase character [a-z]
// At least one uppercase character [A-Z]
// At least one special character [*.!@#$%^&(){}[]:;<>,.?/~_+-=|\]
// At least 8 characters in length, but no more than 32.
// No whitespaces.
export const password = (value) => {
  if (/\s/.test(value)) {
    return 'Password should not contain spaces';
  }

  if (!/[0-9]/.test(value)) {
    return 'Password should contain at least one digit [0-9]';
  }

  if (!/[a-z]/.test(value)) {
    return 'Password should contain at least one lowercase character [a-z]';
  }

  if (!/[A-Z]/.test(value)) {
    return 'Password should contain at least one uppercase character [A-Z]';
  }

  if (!/[*.!@#$%^&(){}[\]:;<>,.?/~_\+\-=|\\]+/.test(value)) {
    return 'Password should contain at least one special character [*.!@#$%^&(){}[]:;<>,.?/~_+-=|\\]';
  }

  const valueLength = value.length;
  if (valueLength <= 8 || valueLength >= 32) {
    return 'Should be between 8 and 32 characters in length';
  }
};

// TODO: add async validations? for example, check if email or username already exists?
export const createValidator = (validators) => (value) => {
  for (const validator of validators) {
    const error = validator(value);
    if (error) {
      return error;
    }
  }
};
