import './VerifyInfoStep.css'

function VerifyField({ id, value, goToPreviousStep }) {
  
  return (
    <div className="VerifyField-container">
      <div className='VerifyFieldName-container'>
        <span className='VerifyFieldName-name'>{id}</span>
        <span className="VerifyFieldName-value">{value}</span>
      </div>
      <div className="VerifyField-buttons">
        <button onClick={() => goToPreviousStep(id)}>{'edit'}</button>
      </div>
    </div>
  )
}

export default function VerifyInfoStep({ state, goToNextStep, goToPreviousStep }) {
    const fields = Object.entries(state);

    return (
      <div className="VerifyInfoStep-container Page-full">
        <h1>Verify your info</h1>
        <div className="VerifyInfoStep-fields">
        {fields.map(([id, { value }]) => {
          return <VerifyField key={id} id={id} value={value} goToPreviousStep={goToPreviousStep}/>
        })}
        </div>
        <button className="PrimaryActionButton" onClick={goToNextStep}>Submit</button>
      </div>
    );
  }
  