import './RoleSelection.css';

const RoleSelection = ({ onNext, onPrevious, formData, setFormData }) => {
  return (
    <div className='role-selection'>

      <form className='role-selection-form' onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <h2>Select Role</h2>
        <div className="role-select">
          <label>
            <input
              type="radio"
              name="role"
              value="admin"
              checked={formData.role === "admin"}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              required
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="user"
              checked={formData.role === "user"}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              required
            />
            User
          </label>
        </div>
        <div className="role-btn">
          <button type="button" onClick={onPrevious}>Previous</button>
          <button type="submit">Next</button>
        </div>

      </form>
    </div>
  );
}

export default RoleSelection;