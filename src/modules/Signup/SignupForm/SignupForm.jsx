import './SignupForm.css';

// TODO: is this Component even needed?
export default function SignupForm({ currentStep, inputConfig, inputState, onInputChange, onInputFinished}) {
  const currentStepConfig = inputConfig[currentStep];
  return (
    <form className='SignupForm-form'>
      <currentStepConfig.component
        key={currentStepConfig.id}
        {...currentStepConfig}
        value={inputState[currentStepConfig.id].value}
        error={inputState[currentStepConfig.id].error}
        onChange={onInputChange}
        onFinished={onInputFinished}
      />
    </form>
  );
}
