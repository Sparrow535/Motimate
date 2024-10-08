import  { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import PasswordReset from "./PasswordReset";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPasswordReset, setShowPasswordReset] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!email) {
      isValid = false;
      formErrors["email"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      if (!email.includes("@")) {
        formErrors["email"] = "Email is invalid. Missing '@' symbol.";
      } else if (!email.includes(".")) {
        formErrors["email"] = "Email is invalid. Missing '.' symbol.";
      } else {
        formErrors["email"] =
          "Email is invalid. Please enter a valid email address.";
      }
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

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Google login clicked");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (email && /\S+@\S+\.\S+/.test(email)) {
        setShowPasswordReset(true);
      }
    }
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
        <form
          className="login-form"
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
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
          Dont have an account? Sign Up
        </button>
      </div>
    </main>
  );
}
