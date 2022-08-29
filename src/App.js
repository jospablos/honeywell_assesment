import { useState } from 'react';
import './App.css';
import SignupPage from './modules/Signup/SignupPage';

function LandingPage({setShowSignup}) {
  return (
    <>
      <div className='Landing-description'>
        <h1>Welcome to this demo signup</h1>
        <p>We hope you enjoy this short flow.</p>
      </div>
      <button className='SignupButton' onClick={() => setShowSignup(true)}>Sign up</button>
    </>
  );
}

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="App">
      {showSignup ? <SignupPage /> : <LandingPage setShowSignup={setShowSignup} />}
    </div>
  );
}

export default App;
