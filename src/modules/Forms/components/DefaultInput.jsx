import './DefaultInput.css';
import classnames from 'classnames';

export default function DefaultInput({ id, label, error, type = 'text', value, onChange: onChangeProp, validate, onFinished }) {
    const onChange = (e) => {
        onChangeProp(id, e.target.value);
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
            <div className="DefaultInput-error">{error}</div>
        </div>
    );
}