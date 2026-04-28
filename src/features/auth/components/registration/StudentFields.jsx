import InputField from "../../../../components/common/InputField";

function StudentFields() {

    return (
        <>
            <InputField
                label="Student number"
                name="studentNumber"
            />

            <InputField
                label="Course"
                name="course"
            />

            <InputField
                label="Year level"
                name="yearLevel"
            />

            <InputField
                label="Valid ID"
                name="validID"
                type="file"
            />
        </>
    );

}

export default StudentFields