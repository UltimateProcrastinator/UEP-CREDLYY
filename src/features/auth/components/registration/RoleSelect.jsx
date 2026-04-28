function RoleSelect({ role, setRole }) {
    return (
        <div className="form-group">
            <label>Role</label>

            <select
                value={role}
                onChange={(e) =>
                    setRole(e.target.value)
                }
            >
                <option value="">
                    Select Role
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
    );
}

export default RoleSelect