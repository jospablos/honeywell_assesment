import './EmojiIndicator.css';

export default function EmojiIndicator(step) {
    return (
        <div className="EmojiIndicator-container">
            <span className='EmojiIndicator-indicator'>{step.complete ? '✅' : '⚪'}</span>
            <span>{step.label}</span>
        </div>
    )
}