import './App.css';
import EmojiIndicator from './modules/EmojiIndicator/EmojiIndicator';
import ProgressIndicator from './modules/ProgressIndicator/ProgressIndicator';
import SignupForm from './modules/SignupForm/SignupForm';
import DefaultInput from './modules/SignupForm/components/DefaultInput';

const signupConfig = {
  email: {
    indicatorLabel: 'Email',
    label: 'Your best email:',
    component: DefaultInput,
  },
  // username: {
  //   indicatorLabel: 'username',
  //   label: 'Choose a username:',
  //   component: DefaultInput,
  // },
  // password: {
  //   indicatorLabel: 'Password',
  //   label: 'Password',
  //   component: PasswordConfirm,
  // },
}

const signupInputs = Object.values(signupConfig);

function App() {
  return (
    <div className="App">
      <ProgressIndicator
        steps={[
          { id: 'email', label: 'Email', complete: true },
          { id: 'username', label: 'Username', complete: false },
          { id: 'password', label: 'Password', complete: false },
        ]}
        stepRenderer={EmojiIndicator}
      />
      <SignupForm inputs={signupInputs} />
    </div>
  );
}

export default App;
