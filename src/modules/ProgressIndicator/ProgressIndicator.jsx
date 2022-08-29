import DefaultSpacer from './DefaultSpacer';
import './ProgressIndicator.css';

// type Step = {
//     id: string;
//     complete: boolean;
//     label: string;
// }

// type Props = {
//     steps: Step[];
// }

export default function ProgressIndicator({ steps, stepRenderer, spacer = DefaultSpacer }) {
    const Renderer = stepRenderer;
    const Spacer = spacer;
    return (
        <div className="ProgressIndicator-container">
            {steps.map((step, index) => {
                const needsSpacer = index < steps.length - 1;
                return (
                    <>
                        <Renderer {...step} />
                        {needsSpacer && <Spacer />}
                    </>
                );
            })}
        </div>
    );
}