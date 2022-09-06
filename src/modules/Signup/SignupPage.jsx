import { useState } from "react";
import FieldStepper from "./FieldStepper/FieldStepper";
import { signupConfig } from "./signupConfig";
import SubmitStep from "./SubmitStep/SubmitStep";
import SuccessStep from "./SuccessStep/SuccessStep";
import VerifyInfoStep from "./VerifyInfoStep/VerifyInfoStep";

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
  const [nextStepEnabled, setNextStepEnabled] = useState(false);
  const [formState, setFormState] = useState(generateFormState(signupConfig));

  const handleInputChange = (inputId, value, error) => {
    return setFormState({
      ...formState,
      [inputId]: {
        ...formState[inputId],
        value,
        error,
        isComplete: !error,
      },
    });
  };

  const goToPreviousStep = (step) => {
    if (step === 'password') {
      handleInputChange('password', '', null);
    }
    setCurrentStep(step);
  }

  const goToNextStep = () => {    
    switch(currentStep) {
      case "verify":
          setCurrentStep("submit");
        break;

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
          setCurrentStep("verify");
        } else {
          const isCurrentStepComplete = formState[currentStep].isComplete;
          if (isCurrentStepComplete) {
            setCurrentStep(nextIncomplete);
            setNextStepEnabled(false);
          }
        }
      }
    }
  };

  const renderFormBody = () => {
    switch(currentStep) {
      case "verify":
        return <VerifyInfoStep state={formState} goToNextStep={goToNextStep} goToPreviousStep={goToPreviousStep} />;

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
            goToNextStep={goToNextStep}
            nextStepEnabled={nextStepEnabled}
            enableNextStep={setNextStepEnabled}
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
