import { useState } from "react";
import { Link } from "react-router-dom";

export default function PasswordReset() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (email === "") {
      isValid = false;
      formErrors["email"] = "Email is required";
    } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      isValid = false;
      formErrors["email"] = "Enter a valid email address";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Password reset email sent to:", email);
    }
    //props.onFormSwitch("OTPVerification", email); // Pass email to OTPVerification
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-white text-gray-600">
      <h1 className="absolute top-6 left-12 font-extrabold text-2xl text-gray-800">
        <a href="/"> Motimate</a>
      </h1>
      <div className="flex flex-col w-96 h-96">
        <h2 className="font-bold text-center text-2xl text-gray-800 mb-2">
          Reset Your Password{" "}
        </h2>
        <h4 className="font-normal text-center text-gray-600 mb-6">
          Enter Your Email Address and We Will Send You Instructions to Reset
          Your Password
        </h4>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-left mb-1">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            className="p-2  mb-1 border border-gray-500 rounded-2xl"
          />
          <div className="text-red-500 text-sm">{errors.email}</div>

     
            <button
              type="submit"
              className="w-full p-2 bg-gray-800  text-white font-bold rounded-2xl mt-5"
            >
             <Link  to="/OTP">Continue</Link>
            </button>

        </form>
        <Link
          to="/Login"
          className="my-2 text-center underline hover:cursor-pointer"
        >
          Back to Login Page
        </Link>
      </div>
    </main>
  );
}
