import './SignupForm.css';

export default function SignupForm({inputs}) {
  return (
    <form className='SignupForm-form'>
      {inputs.map((input) => {
        return (
          <input.component {...input} />
        );
      })}
    </form>
  );
}
