import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

export default function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
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
