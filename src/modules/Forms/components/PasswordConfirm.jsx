import { useState } from "react";
import DefaultInput from "./DefaultInput";

// TODO: when converted to TS, create a common input interface.
export default function PasswordConfirm(props) {
  const [confirmation, setConfirmation] = useState("");
  const [confirmationError, setConfirmationError] = useState("");

  const onPasswordChange = (id, value, error) => {
    const confError =
      !confirmation || value !== confirmation ? "Passwords do not match" : "";
    setConfirmationError(confError);
    props.enableNextStep(!confError);
    props.onChange(id, value, error, confirmation && !confError);
  };

  const onConfirmationChange = (_, value, error) => {
    setConfirmation(value);
    setConfirmationError(error);
    const hasNoErrors = !error && !props.error;
    props.onChange(props.id, props.value, props.error, hasNoErrors);
    props.enableNextStep(hasNoErrors);
  };

  const validateConfirmation = (value) => {
    if (!value) {
      return "Confirmation is required";
    }
    if (value !== props.value) {
      return "Passwords do not match";
    }
  };

  return (
    <>
      <DefaultInput
        {...props}
        name={props.id}
        onChange={onPasswordChange}
        type="password"
      />
      <DefaultInput
        value={confirmation}
        name="passwordConfirmation"
        type="password"
        label={"Confirm password"}
        error={confirmationError}
        onChange={onConfirmationChange}
        validate={validateConfirmation}
        enableNextStep={props.enableNextStep}
        autoFocus={false}
      />
    </>
  );
}
