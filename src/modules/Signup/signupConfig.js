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
    nextStep: "username",
  },
  username: {
    id: "username",
    indicatorLabel: "username",
    label: "Choose a username:",
    component: DefaultInput,
    validate: createValidator([required("Username"), username]),
    nextStep: "password",
  },
  password: {
    id: "password",
    indicatorLabel: "Password",
    label: "Password",
    component: PasswordConfirm,
    validate: createValidator([required("Password"), password]),
  },
};