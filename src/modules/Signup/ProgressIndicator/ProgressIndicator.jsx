import React from 'react';
import DefaultSpacer from './DefaultSpacer';
import './ProgressIndicator.css';


export default function ProgressIndicator({ state, config, stepRenderer, spacer = DefaultSpacer }) {
    const Renderer = stepRenderer;
    const Spacer = spacer;
    const steps = Object.values(config).map(field => ({
        id: field.id,
        complete: state[field.id].isComplete,
        label: config[field.id].indicatorLabel,
    }));
    return (
        <div className="ProgressIndicator-container">
            {steps.map((step, index) => {
                const needsSpacer = index < steps.length - 1;
                return (
                    <React.Fragment key={step.id}>
                        <Renderer {...step} />
                        {needsSpacer && <Spacer />}
                    </React.Fragment>
                );
            })}
        </div>
    );
}