import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!name) {
      isValid = false;
      formErrors["name"] = "User Name is required";
    }

    if (!email) {
      isValid = false;
      formErrors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      formErrors["email"] = "Email is invalid";
    }

    if (!pass) {
      isValid = false;
      formErrors["password"] = "Password is required";
    } else if (pass.length < 6) {
      isValid = false;
      formErrors["password"] = "Password must be at least 6 characters long";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(email);
    }
  };

  const handleGoogleRegister = () => {
    // Implement Google register logic here
    console.log("Google register clicked");
  };

  return (
    <main className="outermost-container">
      <h1 className="logo">MotiMate</h1>
      <div className="auth-form-container">
        <h2>Welcome to MotiMate</h2>
        <h4>To Get Started, Please Register</h4>
        <button className="google-register-btn" onClick={handleGoogleRegister}>
          <FaGoogle /> Register with Google
        </button>
        <div className="separator">
          <span>OR</span>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">User Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            placeholder="User Name"
            type="text"
          />
          <div className="error">{errors.name}</div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <div className="error">{errors.email}</div>
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          <div className="error">{errors.password}</div>
          <button type="submit">Register</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Login
        </button>
      </div>
    </main>
  );
}
