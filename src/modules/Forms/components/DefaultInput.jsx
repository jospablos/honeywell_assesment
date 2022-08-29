import { useState } from 'react';
import './DefaultInput.css';
import classnames from 'classnames';

export default function DefaultInput({ id, label, error, type = 'text', value, onChange: onChangeProp, validate, enableNextStep, description }) {
    const [hasFocusedOut, setHasFocusedOut] = useState(false);

    const onChange = (e) => {
        const error = validate(e.currentTarget.value);
        enableNextStep(!error);
        onChangeProp(id, e.target.value, error);
    }
    
    const onBlur = (e) => {
        const error = validate(e.currentTarget.value);
        onChangeProp(id, e.target.value, error);
        setHasFocusedOut(true);
    }

    return (
        <div className={classnames("DefaultInput-container", { error: hasFocusedOut && error })}>
            <label>{label}</label>
            <p>{description}</p>
            <input value={value} type={type} onChange={onChange} onBlur={onBlur} />
            <div className="DefaultInput-error">{hasFocusedOut && error}</div>
        </div>
    );
}