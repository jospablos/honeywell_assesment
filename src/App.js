import './App.css';
import { useState } from 'react';
import EmojiIndicator from './modules/EmojiIndicator/EmojiIndicator';
import ProgressIndicator from './modules/ProgressIndicator/ProgressIndicator';
import SignupForm from './modules/SignupForm/SignupForm';
import DefaultInput from './modules/SignupForm/components/DefaultInput';

const required = (field) => (value) => {
  if (!value) {
    return `${field} is required`;
  }
};

const email = (value) => {
  const emailRegex = /jiji/;
  if (!emailRegex.test(value)) {
    return `Should be a valid email`;
  }
};


const username = (value) => {
  const spaceRegex = /\s/;
  if (spaceRegex.test(value)) {
    return `Should not contain spaces`;
  }
};

const createValidator = (validators) => (value) => {
  for (const validator of validators) {
    const error = validator(value);
    if (error) {
      return error;
    }
  }
}

const signupConfig = {
  email: {
    id: 'email',
    indicatorLabel: 'Email',
    label: 'Enter your email:',
    component: DefaultInput,
    validate: createValidator([required('Email'), email]),
  },
  username: {
    id: 'username',
    indicatorLabel: 'username',
    label: 'Choose a username:',
    component: DefaultInput,
    validate: createValidator([required('Username'), username]),
  },
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
      error: null,
      isComplete: false,
    };
    return acc;
  } , {});
}

function App() {
  const [formState, setFormState] = useState(generateFormState(signupInputs));

  const handleInputChange = (inputId, value, error) => {
      return setFormState({
        ...formState,
        [inputId]: {
          ...formState[inputId],
          value,
          error,
        }
      });
  }

  const handleInputFinished = (inputId, isComplete, error) => {
    return setFormState({
      ...formState,
      [inputId]: {
        ...formState[inputId],
        isComplete,
        error,
      }
    });
  };

  return (
    <div className="App">
      <ProgressIndicator
        state={formState}
        config={signupConfig}
        stepRenderer={EmojiIndicator}
      />
      <SignupForm
        inputConfig={signupInputs}
        inputState={formState}
        onInputChange={handleInputChange}
        onInputFinished={handleInputFinished}
      />
    </div>
  );
}

export default App;
