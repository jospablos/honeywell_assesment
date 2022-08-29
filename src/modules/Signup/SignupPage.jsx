import { useState } from "react";
import EmojiIndicator from "./IndicatorRenderers/EmojiIndicator/EmojiIndicator";
import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";
import SignupForm from "./SignupForm/SignupForm";
import NextButton from "./SignupForm/NextButton";
import { signupConfig } from "./signupConfig";
import SubmitStep from "./SubmitStep/SubmitStep";
import SuccessStep from "./SuccessStep/SuccessStep";

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
  const [currentStep, setCurrentStep] = useState("submit");
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
    switch(currentStep) {
      case "submit":
        setCurrentStep("success");
        break;
        
        case "success":
          // TODO: what's next from here?
          break;

      default: {
        const nextIncomplete = Object.keys(formState).find((inputId) => !formState[inputId].isComplete)
        if (nextIncomplete && currentStepState.isComplete) {
          setCurrentStep(nextIncomplete);
        }
      }
    }
  };

  const renderFormBody = () => {
    switch(currentStep) {
      case "submit":
        return <SubmitStep state={formState} goToNextStep={goToNextStep} />;
      
      case "success":
        return <SuccessStep />;

      default:
        return (
          <div className="SignupPage-formBody">
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
  }

  return (
    <div className="Page-full">
      {renderFormBody()}
    </div>
  );
}
