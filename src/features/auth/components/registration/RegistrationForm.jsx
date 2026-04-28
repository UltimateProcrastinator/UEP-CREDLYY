import { useState } from "react";

import Button from "../../../../components/common/Button";
import InputField from "../../../../components/common/InputField";
import PasswordField from "../../../../components/common/PasswordField";
import FormFooter from "../../../../components/common/FormFooter";
import FormHeader from "../../../../components/common/FormHeader";
import FormContainer from "../../../../components/common/FormContainer";

import StudentFields from "./StudentFields";
import AlumniFields from "./AlumniFields";
import StaffFields from "./StaffFields";

import "./Registration.css";

function RegistrationForm() {

    const [role, setRole] = useState("");

    const roleFields = {
        student: <StudentFields />,
        alumni: <AlumniFields />,
        staff: <StaffFields />
    };

    return (

        <FormContainer>

            <form className="registration-form">

                <FormHeader 
                    text="Account Sign-Up"
                />
                
                {/* TOP SECTION */}

                <div className="form-grid">

                    <InputField
                        label="Last name"
                        name="lastName"
                    />

                    <InputField
                        label="First name"
                        name="firstName"
                    />

                    <InputField
                        label="Middle name"
                        name="middleName"
                    />

                    <PasswordField
                        label="Password"
                        name="password"
                    />

                    <InputField
                        label="Email address"
                        name="email"
                        type="email"
                    />

                    {/* USER TYPE */}

                    <div className="form-group">

                        <label>Role</label>

                        <select
                            value={role}
                            onChange={(e) =>
                                setRole(e.target.value)
                            }
                        >
                            <option value="">
                                Select role
                            </option>

                            <option value="student">
                                Student
                            </option>

                            <option value="alumni">
                                Alumni
                            </option>

                            <option value="staff">
                                Staff
                            </option>

                        </select>

                    </div>

                </div>

                <hr />

                {/* ROLE FIELDS */}

                {role && (

                    <div className="form-grid">

                        {roleFields[role]}

                    </div>

                )}

                <Button
                    type="submit"
                    text="SUBMIT FOR APPROVAL"
                />

                <hr />

                <FormFooter
                    text="Already have an account?"
                    linkText="Log in"
                    linkHref="#"
                />

            </form>

        </FormContainer>

    );
}

export default RegistrationForm;