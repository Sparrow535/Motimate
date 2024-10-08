import { useState } from "react";
import "./App.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PasswordReset from "./pages/PasswordReset.jsx";
import OTPVerification from "./pages/otp.jsx";
import NewPassword from "./pages/NewPassword.jsx";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const [email, setEmail] = useState("");

  const toggleForm = (formName, email = "") => {
    setCurrentForm(formName);
    if (email) setEmail(email);
  };

  return (
    <div className="App">
      {currentForm === "login" && <Login onFormSwitch={toggleForm} />}
      {currentForm === "register" && <Register onFormSwitch={toggleForm} />}
      {currentForm === "PasswordReset" && (
        <PasswordReset onFormSwitch={toggleForm} />
      )}
      {currentForm === "OTPVerification" && (
        <OTPVerification onFormSwitch={toggleForm} email={email} />
      )}
      {currentForm === "NewPassword" && (
        <NewPassword onFormSwitch={toggleForm} email={email} />
      )}
    </div>
  );
}

export default App;
