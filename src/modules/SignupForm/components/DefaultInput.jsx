import './DefaultInput.css';

export default function DefaultInput({ id, label, type = 'text', value, onChange: onChangeProp }) {
    const onChange = (e) => {
        onChangeProp(id, e.target.value);
    }

    return (
        <div className="DefaultInput-container">
            <label>{label}</label>
            <input value={value} type={type} onChange={onChange} />
        </div>
    );
}