import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [setLoading] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!name) {
      isValid = false;
      formErrors["name"] = "User Name is required";
    }

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

    if (!passwordConfirm) {
      isValid = false;
      formErrors["passwordConfirm"] = "Confrim password is required";
    } else if (pass !== passwordConfirm) {
      formErrors["passwordConfirm"] = "Passwords do not match";
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(email);
      try {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:8000/api/users/register",
          {
            name,
            email,
            password: pass,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error.response.data);
        setErrors(error.response.data.errors);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleGoogleRegister = () => {
    window.location.href = "http://localhost:8000/auth/google";
    console.log("Google register clicked");
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-600">
        <h1 className="absolute top-6 left-12 font-extrabold text-2xl text-gray-800">
          <a href="/"> Motimate</a>
        </h1>
        <div className="flex flex-col w-96 h-96">
          <h2 className="font-bold text-center text-2xl text-gray-800 mb-2">
            Welcome to Motimate
          </h2>
          <h4 className="font-normal text-center text-gray-600 mb-6">
            To Get Started, Please Register
          </h4>

          <button
            className="flex items-center justify-center w-full p-2 text-lg font-semibold bg-gray-800 text-white rounded-2xl mb-3"
            onClick={handleGoogleRegister}
          >
            <FcGoogle className="mr-2 w-6 h-6" /> Register with Google
          </button>

          <div className="relative flex py-3 items-center mb-3">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-4 text-gray-500 font-extrabold">OR</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-left mb-2">
              Username
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              placeholder="User Name"
              type="text"
              className="p-2  mb-1 border border-gray-500 rounded-2xl"
            />
            <div className="text-red-500 text-sm">{errors.name}</div>

            <label htmlFor="email" className="text-left mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              className="p-2 mb-1 border border-gray-500 rounded-2xl"
            />
            <div className="text-red-500 mb-2">{errors.email}</div>

            <label htmlFor="password" className="text-left mb-2">
              Password
            </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="p-2 mb-1 border border-gray-500 rounded-2xl"
            />
            <div className="text-red-500 text-sm">{errors.password}</div>

            <label htmlFor="password" className="text-left mb-2">
              Confirm Password
            </label>
            <input
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              className="p-2 mb-1 border border-gray-500 rounded-2xl"
            />
            <div className="text-red-500 text-sm">{errors.passwordConfirm}</div>

            <button
              type="submit"
              className="w-full p-2 bg-gray-800  text-white font-bold rounded-2xl mt-5"
            >
              Register
            </button>

            <p className="mt-2 mb-4">
              Already have an account?
              <a
                href="/Login"
                className="ml-5 text-gray-600 text-sm underline hover:cursor-pointer"
              >
                Log In
              </a>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
