import './DefaultInput.css';
import classnames from 'classnames';

export default function DefaultInput({ id, label, error, type = 'text', value, onChange: onChangeProp, validate, onFinished }) {
    const onChange = (e) => {
        const error = validate(e.target.value);
        onChangeProp(id, e.target.value, error);
    }

    const onBlur = (e) => {
        const error = validate(e.currentTarget.value);
        const isComplete = !error;
        onFinished(id, isComplete, error);
    }

    return (
        <div className={classnames("DefaultInput-container", { error })}>
            <label>{label}</label>
            <input value={value} type={type} onChange={onChange} onBlur={onBlur} />
            {error && <div className="DefaultInput-error">{error}</div>}
        </div>
    );
}