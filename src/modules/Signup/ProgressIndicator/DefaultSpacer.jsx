import './DefaultSpacer.css';

export default function DefaultSpacer({stepIsComplete}) {
    const color = stepIsComplete ? '#adff2f' : '#ffffff42';
    return (
        <div className="Spacer-container">
            <div style={{ borderTop: `7px dotted ${color}`, width: 40, verticalAlign: 'center'}} className="Spacer-spacer"></div>
        </div>
    );
}