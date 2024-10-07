import React, { useRef, useState } from "react";

export default function OTPVerification(props) {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError(""); // Clear error when input is valid
      if (value.length === 1 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleInputKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join("").length === 6) {
      // Add any OTP validation logic here if needed
      props.onFormSwitch("NewPassword");
    } else {
      setError("Please enter a 6-digit OTP");
    }
  };

  const handleResendOTP = () => {
    // Implement resend OTP logic here
    console.log("Resend OTP clicked");
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
          {/* OTP input fields */}
          <div className="otp-inputs">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="otp-input"
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleInputKeyDown(e, index)}
                value={otp[index]}
              />
            ))}
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="continue-btn">
            Continue
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Back to MotiMate
        </button>
        <button className="link-btn" onClick={handleResendOTP}>
          Resend OTP
        </button>
      </div>
    </main>
  );
}
