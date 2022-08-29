import './SignupForm.css';

export default function SignupForm({inputConfig, inputState, onInputChange, onInputError}) {

  return (
    <form className='SignupForm-form'>
      {inputConfig.map((config) => {
        return (
          <config.component
            {...config}
            value={inputState[config.id].value}
            error={inputState[config.id].error}
            onChange={onInputChange}
            onError={onInputError}
          />
        );
      })}
    </form>
  );
}
