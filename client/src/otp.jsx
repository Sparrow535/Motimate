import React, { useState, useEffect } from "react";

export default function OTPVerification(props) {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  useEffect(() => {
    if (props.email) {
      console.log("Password reset email sent to:", props.email);
    }
  }, [props.email]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement OTP verification logic here
    console.log("Entered OTP is:", otp.join(""));
  };

  return (
    <main className="outermost-container">
      <h1 className="logo">MotiMate</h1>
      <div className="auth-form-container">
        <h2>Enter OTP</h2>
        <h4>
          We have sent a 6-digit OTP to your email. Please enter it below to
          verify your account.
        </h4>
        <form className="otp-form" onSubmit={handleSubmit}>
          {otp.map((data, index) => {
            return (
              <input
                className="otp-input"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
          <button type="submit">Verify</button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("PasswordReset")}
        >
          Back to Password Reset
        </button>
      </div>
    </main>
  );
}
