import './SignupForm.css';

export default function SignupForm({inputConfig, inputState, onInputChange, onInputFinished}) {

  return (
    <form className='SignupForm-form'>
      {inputConfig.map((config) => {
        return (
          <config.component
            key={config.id}
            {...config}
            value={inputState[config.id].value}
            error={inputState[config.id].error}
            onChange={onInputChange}
            onFinished={onInputFinished}
          />
        );
      })}
    </form>
  );
}
