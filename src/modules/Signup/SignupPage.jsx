import { useState } from "react";
import FieldStepper from "./FieldStepper/FieldStepper";
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
  const [currentStep, setCurrentStep] = useState("email");
  const [formState, setFormState] = useState(generateFormState(signupConfig));

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

      // TODO: we might be able to move field stepping completely to the FieldStepper component and
      // keep only filling form / submitting / success states here.
      default: {
        const nextIncomplete = Object.keys(formState).find((inputId) => !formState[inputId].isComplete)
        if (!nextIncomplete) {
          setCurrentStep("submit");
        } else {
          const isCurrentStepComplete = formState[currentStep].isComplete;
          if (isCurrentStepComplete) {
            setCurrentStep(nextIncomplete);
          }
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
          <FieldStepper
            currentStep={currentStep}
            state={formState}
            fieldConfig={signupConfig}
            onInputChange={handleInputChange}
            onInputFinished={handleInputFinished}
            goToNextStep={goToNextStep}
          />
        );
    }
  }

  return (
    <div>
      {renderFormBody()}
    </div>
  );
}
