function PasswordField({ label, type = "password", placeholder, name }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} placeholder={placeholder}/>
        </div>
    );
}

export default PasswordField