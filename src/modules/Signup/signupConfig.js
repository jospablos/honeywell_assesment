import DefaultInput from "../Forms/components/DefaultInput";
import PasswordConfirm from "../Forms/components/PasswordConfirm";
import {
  createValidator,
  required,
  email,
  username,
  password,
} from "../Forms/validation";

export const signupConfig = {
  email: {
    id: "email",
    indicatorLabel: "Email",
    label: "Enter your email:",
    component: DefaultInput,
    validate: createValidator([required("Email"), email]),
  },
  username: {
    id: "username",
    indicatorLabel: "Username",
    label: "Choose a username:",
    component: DefaultInput,
    validate: createValidator([required("Username"), username]),
  },
  password: {
    id: "password",
    indicatorLabel: "Password",
    description: 'At least one digit, one lowercase character, one uppercase character, one special character, and between 8 and 32 characters in length',
    label: "Password",
    component: PasswordConfirm,
    validate: createValidator([required("Password"), password]),
  },
};