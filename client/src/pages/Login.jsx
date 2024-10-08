import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
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
    <main className="flex items-center justify-center min-h-screen bg-white text-gray-600">
      <h1 className="absolute top-6 left-12 font-extrabold text-2xl text-gray-800">
        Motimate
      </h1>
      <div className="flex flex-col w-96 h-96">
        <h2 className="font-bold text-center text-2xl text-gray-800 mb-2">
          Welcome to Motimate
        </h2>
        <h4 className="font-normal text-center text-gray-600 mb-6">
          To Get Started, Please Login
        </h4>

        <button
          className="flex items-center justify-center w-full p-2 text-lg font-semibold bg-gray-800 text-white rounded-2xl mb-3"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="mr-2 w-6 h-6" /> Log in with Google
        </button>

        <div className="relative flex py-3 items-center mb-3">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="mx-4 text-gray-800 font-extrabold">OR</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>

        <form
          className="flex flex-col"
          onSubmit={handleSubmit}
          onKeyDown={handleKeyDown}
        >
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
          <div className="text-red-500 mb-2">{errors.email}</div>

          <label htmlFor="password" className="text-left mb-1 ">
            Password
          </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
            className="p-2 border border-gray-500 rounded-2xl"
          />
          <div className="text-red-500 mb-4">{errors.password}</div>

          <button
            className="self-end text-gray-600 text-sm underline hover:text-gray-800 mb-3"
            onClick={() => setShowPasswordReset(true)}
          >
            Forgot your password?
          </button>

          <button
            type="submit"
            className="w-full p-2 bg-gray-800  text-white font-bold rounded-2xl"
          >
            Login
          </button>
        </form>

        <p className="mt-2">
          Don`t have an account?
          <a
            className="ml-5 text-gray-600 text-sm underline hover:cursor-pointer"
            onClick={() => props.onFormSwitch("register")}
          >
            Sign Up
          </a>
        </p>
      </div>
    </main>
  );
}
