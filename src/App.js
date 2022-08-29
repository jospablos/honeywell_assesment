import './App.css';
import { useState } from 'react';
import EmojiIndicator from './modules/EmojiIndicator/EmojiIndicator';
import ProgressIndicator from './modules/ProgressIndicator/ProgressIndicator';
import SignupForm from './modules/SignupForm/SignupForm';
import DefaultInput from './modules/SignupForm/components/DefaultInput';
import PasswordConfirm from './modules/SignupForm/components/PasswordConfirm';
import { createValidator, required, email, username, password } from './modules/SignupForm/validation';
import NextButton from './modules/SignupForm/NextButton';

const signupConfig = {
  email: {
    id: 'email',
    indicatorLabel: 'Email',
    label: 'Enter your email:',
    component: DefaultInput,
    validate: createValidator([required('Email'), email]),
    nextStep: 'username',
  },
  username: {
    id: 'username',
    indicatorLabel: 'username',
    label: 'Choose a username:',
    component: DefaultInput,
    validate: createValidator([required('Username'), username]),
    nextStep: 'password',
  },
  password: {
    id: 'password',
    indicatorLabel: 'Password',
    label: 'Password',
    component: PasswordConfirm,
    validate: createValidator([required('Password'), password]),
    nextStep: 'submit',
  },
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
  const [currentStep, setCurrentStep] = useState('email');
  const [formState, setFormState] = useState(generateFormState(signupInputs));

  const currentStepState = formState[currentStep];

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

  const goToNextStep = () => {
    if (currentStepState.isComplete) {
      setCurrentStep(signupConfig[currentStep].nextStep);
    }
  };

  return (
    <div className="App">
      {/* TODO: Refactor components below to separate Signup screen */}
      <ProgressIndicator
        state={formState}
        config={signupConfig}
        stepRenderer={EmojiIndicator}
      />
      <SignupForm
        currentStep={currentStep}
        inputConfig={signupConfig}
        inputState={formState}
        onInputChange={handleInputChange}
        onInputFinished={handleInputFinished}
      />
      <div className='SignupForm-nextButtonWrapper'>
        <NextButton disabled={!currentStepState.isComplete} goNext={goToNextStep} />
      </div>
    </div>
  );
}

export default App;
