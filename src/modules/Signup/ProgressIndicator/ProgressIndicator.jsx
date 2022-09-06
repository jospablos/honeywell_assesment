import React from 'react';
import DefaultSpacer from './DefaultSpacer';
import './ProgressIndicator.css';


export default function ProgressIndicator({ currentStep, state, config, stepRenderer, spacer = DefaultSpacer }) {
    const Renderer = stepRenderer;
    const Spacer = spacer;
    const steps = Object.values(config).map(field => ({
        id: field.id,
        complete: state[field.id].isComplete,
        label: config[field.id].indicatorLabel,
        active: currentStep === field.id,
    }));
    return (
        <div className="ProgressIndicator-container">
            {steps.map((step, index) => {
                // const needsSpacer = index > 0;
                const needsSpacer = index < steps.length - 1;
                return (
                    <React.Fragment key={step.id}>
                        <Renderer {...step} />
                        {needsSpacer && <Spacer stepIsComplete={step.complete} />}
                    </React.Fragment>
                );
            })}
        </div>
    );
}