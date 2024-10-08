import { useState } from "react";

export default function NewPassword({ onFormSwitch, email }) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!newPassword) {
      isValid = false;
      formErrors["newPassword"] = "New Password is required";
    } else if (newPassword.length < 6) {
      isValid = false;
      formErrors["newPassword"] = "Password must be at least 6 characters long";
    }

    if (!confirmPassword) {
      isValid = false;
      formErrors["confirmPassword"] = "Confirm New Password is required";
    } else if (newPassword !== confirmPassword) {
      isValid = false;
      formErrors["confirmPassword"] = "Passwords do not match";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("New Password Set for:", email);
      onFormSwitch("login");
    }
  };

  return (
    <main className="outermost-container">
      <h1 className="logo">MotiMate</h1>
      <div className="auth-form-container">
        <h2>Password Reset</h2>
        <h4>Please Enter Your New Password</h4>
        <form className="new-password-form" onSubmit={handleSubmit}>
          <label htmlFor="newPassword">New Password</label>
          <div className="password-input-container">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              name="newPassword"
              id="newPassword"
              placeholder="New Password"
            />
          </div>
          {errors.newPassword && <p className="error">{errors.newPassword}</p>}
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <div className="password-input-container">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm New Password"
            />
          </div>
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
          <button type="submit">Confirm</button>
        </form>
      </div>
    </main>
  );
}
