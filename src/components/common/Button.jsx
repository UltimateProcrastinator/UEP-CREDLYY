function Button({ text, type = "button" }) {
    return (
        <div className="form-group">
            <button type={type}>{text}</button>
        </div>
    );
}

export default Button