import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!newPassword) {
      isValid = false;
      formErrors["newPassword"] = "New Password is required";
    } else if (
      !newPassword.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])[a-zA-Z\d\W]{8,}$/
      )
    ) {
      isValid = false;
      formErrors["newPassword"] =
        "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter";
    }

    if (!confirmPassword) {
      isValid = false;
      formErrors["confirmPassword"] = "Confrim password is required";
    } else if (newPassword !== confirmPassword) {
      formErrors["confirmPassword"] = "Passwords do not match";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("New Password Set for:");
      //onFormSwitch("login");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-white text-gray-600">
      <h1 className="absolute top-6 left-12 font-extrabold text-2xl text-gray-800">
        <a href="/"> Motimate</a>
      </h1>
      <div className="flex flex-col w-96 h-96">
        <h2 className="font-bold text-center text-2xl text-gray-800 mb-2">
          Password Reset
        </h2>
        <h4 className="font-normal text-center text-gray-600 mb-6">
          Please Enter Your New Password
        </h4>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="newPassword" className="text-left mb-2">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            name="newPassword"
            id="newPassword"
            placeholder="New Password"
            className="p-2  mb-1 border border-gray-500 rounded-2xl"
          />
          <div className="text-red-500 text-sm">{errors.newPassword}</div>

          <label htmlFor="confirmPassword" className="text-left mb-2">
            Confirm New Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm New Password"
            className="p-2  mb-1 border border-gray-500 rounded-2xl"
          />
          <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
          <>
            <button
              type="submit"
              className="w-full p-2 bg-gray-800  text-white font-bold rounded-2xl mt-5"
            >
              <Link to="/Login">Confirm</Link>
            </button>
          </>
        </form>
      </div>
    </main>
  );
}
