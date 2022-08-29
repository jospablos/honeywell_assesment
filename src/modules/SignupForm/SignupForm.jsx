import './SignupForm.css';

export default function SignupForm({inputConfig, inputState, onInputChange}) {

  return (
    <form className='SignupForm-form'>
      {inputConfig.map((config) => {
        return (
          <config.component
            {...config}
            value={inputState[config.id].value}
            error={inputState[config.id].error}
            onChange={onInputChange}
          />
        );
      })}
    </form>
  );
}
