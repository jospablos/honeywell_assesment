import { useState } from "react";
import DefaultInput from "./DefaultInput";

// TODO: when converted to TS, create a common input interface.
export default function PasswordConfirm(props) {
  const [confirmation, setConfirmation] = useState('');
  const [confirmationError, setConfirmationError] = useState(null);

  const onConfirmationChange = (_, value) => {
    setConfirmation(value);
  };

  const validateConfirmation = (value) => {
    if (value !== props.value) {
      return "Passwords do not match";
    }
  };

  const onConfirmationFinished = (id, isComplete, error) => {
    setConfirmationError(error);
    props.onFinished(props.id, isComplete);
  }

  return (
    <>
      <DefaultInput {...props} />
      <DefaultInput
        value={confirmation}
        label={"Confirm password"}
        error={confirmationError}
        onChange={onConfirmationChange}
        validate={validateConfirmation}
        onFinished={onConfirmationFinished}
      />
    </>
  );
}
