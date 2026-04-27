function FormFooter({ text, linkText, linkHref }) {
    return(
        <div className="form-group">
            <p>
                {text}{" "}
                <a href={linkHref}>
                    {linkText}
                </a>
            </p>
        </div>
    );
}

export default FormFooter;