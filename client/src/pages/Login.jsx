import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import PasswordReset from "./PasswordReset";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // const [showPasswordReset, setShowPasswordReset] = useState(false);
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

    if (!pass) {
      isValid = false;
      formErrors["password"] = "Password is required";
    } else if (
      !pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])[a-zA-Z\d\W]{8,}$/)
    ) {
      isValid = false;
      formErrors["password"] =
        "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter";
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
        // setShowPasswordReset(true);
        true; //pelden changed
      }
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-white text-gray-600">
      <h1 className="absolute top-6 left-12 font-extrabold text-2xl text-gray-800">
        <a href="/"> Motimate</a>
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
          <span className="mx-4 text-gray-500 font-extrabold">OR</span>
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
            id="password"
            name="password"
            className="p-2 border border-gray-500 rounded-2xl"
          />
          <div className="text-red-500 mb-4">{errors.password}</div>

          <Link to="/ForgotPassword" className="text-end">
            <button className="self-end text-gray-600 text-sm underline hover:text-gray-800 mb-3">
              Forgot your password?
            </button>
          </Link>

          <button
            type="submit"
            className="w-full p-2 bg-gray-800  text-white font-bold rounded-2xl"
          >
            <Link to="/User">Login</Link>
          </button>
          <p className="mt-2 mb-5">
            Don`t have an account?
            <a
              href="/Register"
              className="ml-5 text-gray-600 text-sm underline hover:cursor-pointer"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}
