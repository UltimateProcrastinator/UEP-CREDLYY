import FormContainer from "../../../../components/common/FormContainer";
import BackgroundTitle from "../../../../components/common/BackgroundTitle"
import InputField from "../../../../components/common/InputField"
import PasswordField from "../../../../components/common/PasswordField"
import Button from "../../../../components/common/Button"
import FormFooter from "../../../../components/common/FormFooter";
import "./Login.css"


function LoginForm() {
    return(
        <FormContainer>

            <BackgroundTitle/>

            <form action="" className="login-form">

                <h1 className="form-header">
                    Welcome Back!
                </h1>

                <h2 className="form-subheader">
                    Sign in to continue
                </h2>

                <InputField 
                    label="Username" 
                    name="username" 
                />

                <PasswordField
                    label="Password"
                    name="password"
                />

                <Button
                    type="submit"
                    text="SIGN IN"
                />

                <FormFooter
                    text="Don't have an account yet?"
                    linkText="Sign up"
                    linkHref="#"
                />

            </form>
        </FormContainer>
    );
}

export default LoginForm