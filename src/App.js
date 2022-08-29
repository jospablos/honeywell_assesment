import './App.css';
import { useState } from 'react';
import EmojiIndicator from './modules/EmojiIndicator/EmojiIndicator';
import ProgressIndicator from './modules/ProgressIndicator/ProgressIndicator';
import SignupForm from './modules/SignupForm/SignupForm';
import DefaultInput from './modules/SignupForm/components/DefaultInput';

const signupConfig = {
  email: {
    id: 'email',
    indicatorLabel: 'Email',
    label: 'Enter your email:',
    component: DefaultInput,
  },
  // username: {
  //   id: 'username',
  //   indicatorLabel: 'username',
  //   label: 'Choose a username:',
  //   component: DefaultInput,
  // },
  // password: {
  //   id: 'password',
  //   indicatorLabel: 'Password',
  //   label: 'Password',
  //   component: PasswordConfirm,
  // },
}

const signupInputs = Object.values(signupConfig);

const generateFormState = (inputs) => {
  return inputs.reduce((acc, input) => {
    acc[input.id] = {
      value: '',
    };
    return acc;
  } , {});
}

function App() {
  const [formState, setFormState] = useState(generateFormState(signupInputs));

  const handleInputChange = (inputId, value) => {
      return setFormState({
        ...formState,
        [inputId]: {
          ...formState[inputId],
          value,
        }
      });
  }

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
      <SignupForm
        inputConfig={signupInputs}
        inputState={formState}
        onInputChange={handleInputChange}
      />
    </div>
  );
}

export default App;
