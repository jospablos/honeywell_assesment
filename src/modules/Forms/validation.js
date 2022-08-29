export const required = (field) => (value) => {
  if (!value) {
    return `${field} is required`;
  }
};

export const email = (value) => {
  const emailRegex = /jiji/;
  if (!emailRegex.test(value)) {
    return `Should be a valid email`;
  }
};


export const username = (value) => {
  const spaceRegex = /\s/;
  if (spaceRegex.test(value)) {
    return `Should not contain spaces`;
  }
};

export const password = (value) => {
  // TODO: implement password validation
  const passwordRegex = /\s/;
  if (passwordRegex.test(value)) {
    return `Password should not contain spaces`;
  }
};

export const createValidator = (validators) => (value) => {
  for (const validator of validators) {
    const error = validator(value);
    if (error) {
      return error;
    }
  }
};