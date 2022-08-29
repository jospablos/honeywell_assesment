import './DefaultInput.css';
import classnames from 'classnames';

export default function DefaultInput({ id, label, error, type = 'text', value, onChange: onChangeProp }) {
    const onChange = (e) => {
        onChangeProp(id, e.target.value);
    }

    return (
        <div className={classnames("DefaultInput-container", { error })}>
            <label>{label}</label>
            <input value={value} type={type} onChange={onChange} />
            {error && <div className="DefaultInput-error">{error}</div>}
        </div>
    );
}