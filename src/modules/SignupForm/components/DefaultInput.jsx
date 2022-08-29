export default function DefaultInput({ label, type = 'text' }) {
    return (
        <div>
            <label>{label}</label>
            <input type={type} />
        </div>
    );
}