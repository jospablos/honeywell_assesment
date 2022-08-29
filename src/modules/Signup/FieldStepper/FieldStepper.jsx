import "./FieldStepper.css";
import EmojiIndicator from "../IndicatorRenderers/EmojiIndicator/EmojiIndicator";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";
import NextButton from "./NextButton";

// TODO: is this Component even needed?
export default function FieldStepper({
  state,
  fieldConfig,
  currentStep,
  onInputChange,
  onInputFinished,
  goToNextStep,
  nextStepEnabled,
  enableNextStep
}) {
  const currentStepConfig = fieldConfig[currentStep];

  // TODO: We want to keep using form because it helps screen readers understand there is a field to be filled.
  const onSubmit = (event) => {
    event.preventDefault();
    goToNextStep();
  }

  return (
    <div className="FieldStepper-container">
      <ProgressIndicator
        state={state}
        config={fieldConfig}
        stepRenderer={EmojiIndicator}
      />
      <div className="FieldStepper-step">
        <form className="FieldStepper-form" onSubmit={onSubmit}>
          <currentStepConfig.component
            key={currentStepConfig.id}
            {...currentStepConfig}
            value={state[currentStepConfig.id].value}
            error={state[currentStepConfig.id].error}
            onChange={onInputChange}
            onFinished={onInputFinished}
            enableNextStep={enableNextStep}
          />
        </form>
        <div className="FieldStepper-nextButtonWrapper">
          <NextButton
            enabled={nextStepEnabled}
            goNext={goToNextStep}
          />
        </div>
      </div>
    </div>
  );
}
