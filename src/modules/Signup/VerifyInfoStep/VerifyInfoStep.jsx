import { useState } from 'react';
import './VerifyInfoStep.css'

function VerifyField({ id, value, goToPreviousStep, obfuscate }) {
  const [showValue, setShowValue] = useState(!obfuscate);

  const onMouseDown = () => setShowValue(true);
  const onMouseUp = () => setShowValue(false);


  const renderedValue = obfuscate && !showValue ? value.replace(/./g, '*') : value;

  return (
    <div className="VerifyField-container">
      <div className='VerifyFieldName-container'>
        <span className='VerifyFieldName-name'>{id}</span>
        <span className="VerifyFieldName-value">{renderedValue}</span>
      </div>
      <div className="VerifyField-buttons">
        {obfuscate && <button onMouseUp={onMouseUp} onMouseDown={onMouseDown}>{'view'}</button>}
        <button onClick={() => goToPreviousStep(id)}>{'edit'}</button>
      </div>
    </div>
  )
}

export default function VerifyInfoStep({ state, goToNextStep, goToPreviousStep }) {
    const fields = Object.entries(state);

    return (
      <div className="VerifyInfoStep-container Page-full">
        <h1>Please verify your info</h1>
        <div className="VerifyInfoStep-fields">
        {fields.map(([id, { value }]) => {
          return (
            <VerifyField
              key={id}
              id={id}
              value={value}
              goToPreviousStep={goToPreviousStep}
              // TODO: can we drive this by config?
              obfuscate={id === 'password'}
            />
          )
        })}
        </div>
        <button className="PrimaryActionButton" onClick={goToNextStep}>Submit</button>
      </div>
    );
  }
  