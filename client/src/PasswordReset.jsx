import React, { useState } from "react";

export default function PasswordReset(props) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset email sent to:", email);
    props.onFormSwitch("OTPVerification", email); // Pass email to OTPVerification
  };

  return (
    <main className="outermost-container">
      <h1 className="logo">MotiMate</h1>
      <div className="auth-form-container">
        <h2>Reset Your Password</h2>
        <h4>
          Enter Your Email Address and We Will Send You Instructions to Reset
          Your Password
        </h4>
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
          <button type="submit">Continue</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Back to MotiMate
        </button>
      </div>
    </main>
  );
}
