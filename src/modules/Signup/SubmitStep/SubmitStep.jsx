import { useEffect } from 'react';
import './SubmitStep.css';

const submitSignupData = async (signupData) => {
  // TODO: Transform into API schema here.
  // const requestPayload = transformSignupDataToRequestPayload(signupData);
  // TODO: submit to API here.
  // const requestPayload = fetch('/api/signup', { method: 'POST', body: requestPayload });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}

export default function SubmitStep({ state, goToNextStep }) {
  // Simulate a submission to the server
  useEffect(() => {
    submitSignupData(state).then(() => { goToNextStep(); });
  })

  return (
    <div className="SubmitStep-container">
      <h1>{'<Loading indicator here />'}</h1>
      <h1>Creating your account</h1>
    </div>
  );
}
