import InputField from "../../../../components/common/InputField";

function AlumniFields() {

    return (
        <>
            <InputField
                label="Alumni number"
                name="alumniNumber"
            />

            <InputField
                label="Course"
                name="course"
            />

            <InputField
                label="Year graduated"
                name="yearGraduated"
            />

            <InputField
                label="Valid ID"
                name="validID"
                type="file"
            />
        </>
    );

}

export default AlumniFields