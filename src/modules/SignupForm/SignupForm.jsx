import './SignupForm.css';

export default function SignupForm({inputConfig, inputState, onInputChange}) {

  return (
    <form className='SignupForm-form'>
      {inputConfig.map((input) => {
        return (
          <input.component {...input} value={inputState[input.id].value} onChange={onInputChange} />
        );
      })}
    </form>
  );
}
