import { useState } from "react";
import EmojiIndicator from "./IndicatorRenderers/EmojiIndicator/EmojiIndicator";
import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";
import SignupForm from "./SignupForm/SignupForm";
import NextButton from "./SignupForm/NextButton";
import { signupConfig } from "./signupConfig";

const generateFormState = (config) => {
  return Object.values(config).reduce((acc, input) => {
    acc[input.id] = {
      value: "",
      error: null,
      isComplete: false,
    };
    return acc;
  }, {});
};

export default function SignupPage() {
  const [currentStep, setCurrentStep] = useState("email");
  const [formState, setFormState] = useState(generateFormState(signupConfig));

  const currentStepState = formState[currentStep];

  const handleInputChange = (inputId, value, error) => {
    return setFormState({
      ...formState,
      [inputId]: {
        ...formState[inputId],
        value,
        error,
      },
    });
  };

  const handleInputFinished = (inputId, isComplete, error) => {
    return setFormState({
      ...formState,
      [inputId]: {
        ...formState[inputId],
        isComplete,
        error,
      },
    });
  };

  const goToNextStep = () => {
    if (currentStepState.isComplete) {
      setCurrentStep(signupConfig[currentStep].nextStep);
    }
  };

  return (
    <div>
      <ProgressIndicator
        state={formState}
        config={signupConfig}
        stepRenderer={EmojiIndicator}
      />
      <SignupForm
        currentStep={currentStep}
        inputConfig={signupConfig}
        inputState={formState}
        onInputChange={handleInputChange}
        onInputFinished={handleInputFinished}
      />
      <div className="SignupForm-nextButtonWrapper">
        <NextButton
          disabled={!currentStepState.isComplete}
          goNext={goToNextStep}
        />
      </div>
    </div>
  );
}
