import InputField from "../../../../components/common/InputField";

function StaffFields() {

    return (
        <>
            <InputField
                label="Employee number"
                name="employeeNumber"
            />

            <InputField
                label="Position"
                name="position"
                type="select"
            />

            <InputField
                label="Department"
                name="department"
                type="select"
            />

            <InputField
                label="Valid ID (e.g., Employee ID)"
                name="validID"
                type="file"
            />
        </>
    );

}

export default StaffFields;