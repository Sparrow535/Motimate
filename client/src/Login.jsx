import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import PasswordReset from "./PasswordReset";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPasswordReset, setShowPasswordReset] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Google login clicked");
  };

  if (showPasswordReset) {
    return <PasswordReset onFormSwitch={props.onFormSwitch} />;
  }

  return (
    <main className="outermost-container">
      <h1 className="logo">MotiMate</h1>
      <div className="auth-form-container">
        <h2>Welcome to MotiMate</h2>
        <h4>To Get Started, Please Login</h4>
        <button className="google-login-btn" onClick={handleGoogleLogin}>
          <FaGoogle /> Login with Google
        </button>
        <div className="separator">
          <span>OR</span>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button
            className="link-btn"
            onClick={() => setShowPasswordReset(true)}
          >
            Forgot your password?
          </button>
          <button type="submit">Login</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Sign Up
        </button>
      </div>
    </main>
  );
}
