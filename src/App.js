import { useState } from 'react';
import './App.css';
import SignupPage from './modules/Signup/SignupPage';

function LandingPage({setShowSignup}) {
  return (
    <>
      <div className='Landing-description'>
        <h1>Welcome to this signup demo</h1>
        <p>Hope you enjoy the short user flow.</p>
      </div>
      <button className='PrimaryActionButton' onClick={() => setShowSignup(true)}>Sign up</button>
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
