import './VerifyInfoStep.css'

function VerifyField({ id, value }) {
  return (
    <div className="VerifyField-container">
      <div className='VerifyFieldName-container'>
        <span className='VerifyFieldName-name'>{id}</span>
        <span className="VerifyFieldName-value">{value}</span>
      </div>
      <div className="VerifyField-buttons">
        <button>{'edit'}</button>
      </div>
    </div>
  )
}

export default function VerifyInfoStep({ state, goToNextStep }) {
    const fields = Object.entries(state);

    return (
      <div className="VerifyInfoStep-container Page-full">
        <h1>Verify your info</h1>
        <div className="VerifyInfoStep-fields">
        {fields.map(([id, { value }]) => {
          return <VerifyField key={id} id={id} value={value} />
        })}
        </div>
        <button className="PrimaryActionButton">Submit</button>
      </div>
    );
  }
  