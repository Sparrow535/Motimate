import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function OTPVerification() {
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
      //props.onFormSwitch("NewPassword");
    } else {
      setError("Please enter a 6-digit OTP");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-white text-gray-600">
      <h1 className="absolute top-6 left-12 font-extrabold text-2xl text-gray-800">
      <a href="/"> Motimate</a>
      </h1>
      <div className="flex flex-col w-96 h-96">
        <h2 className="font-bold text-center text-2xl text-gray-800 mb-2">
          Enter OTP
        </h2>
        <h4 className="font-normal text-center text-gray-600 mb-6">
          We have sent a 6-digit OTP to your email. Please enter it below to
          verify your account.
        </h4>
        <form
          className="flex flex-col items-center space-y-4"
          onSubmit={handleSubmit}
        >
          {/* OTP input fields */}
          <div className="flex space-x-2">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500"
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleInputKeyDown(e, index)}
                value={otp[index]}
              />
            ))}
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <button className="w-full p-2 bg-gray-800  text-white font-bold rounded-2xl mt-5 text-center">
            <Link to="/NewPassword">Continue</Link>
          </button>
        </form>
        <button className="w-full p-2 bg-gray-800  text-white font-bold rounded-2xl mt-5">
          <a href="/ForgotPassword"> Resend OTP</a>
        </button>
        <a href="/" className="my-2 text-center underline hover:cursor-pointer">
          Back to Login page
        </a>
      </div>
    </main>
  );
}
