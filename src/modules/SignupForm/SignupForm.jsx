export default function SignupForm({inputs}) {
  return (
    <form>
      {inputs.map((input) => {
        return (
          <input.component {...input} />
        );
      })}
    </form>
  );
}
