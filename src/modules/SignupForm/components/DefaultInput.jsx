import './DefaultInput.css';

export default function DefaultInput({ label, type = 'text' }) {
    return (
        <div className="DefaultInput-container">
            <label>{label}</label>
            <input type={type} />
        </div>
    );
}