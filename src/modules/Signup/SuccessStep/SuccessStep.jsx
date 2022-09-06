import './SuccessStep.css';

export default function SuccessStep() {
  return (
    <div className="SuccessStep-container Page-full">
      <h1>Your account is ready!</h1>
      <button className="PrimaryActionButton" onClick={() => window.location.reload()}>Start</button>
    </div>
  );
}
