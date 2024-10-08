import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Report from "./pages/Report";
import Home from "./pages/Home";
import Task from "./pages/MyTask";
import UserProfile from "./pages/EditProfile"

function App() {
  return (
    <Router>
      <div className="bg-white transition-all dark:bg-gray-800 dark:text-white h-screen w-screen flex gap-7">
        <Sidebar />
        <div className="w-full me-8 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <Routes>
              {/* Redirect the root path to /home */}
              <Route path="/" element={<Navigate to="/home" />} />
              <Route
                path="/home"
                element={
                  <>
                    <Navbar title="Home" />
                    <Home />
                  </>
                }
              />
              <Route
                path="/task"
                element={
                  <>
                    <Navbar title="My Task" />
                    <Task />
                  </>
                }
              />
              <Route
                path="/report"
                element={
                  <>
                    <Navbar title="Report" />
                    <Report />
                  </>
                }
              />
              <Route
                path="/UserProfile"
                element={
                  <>
                    <UserProfile />
                  </>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

// import { useState } from "react";
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import PasswordReset from "./pages/PasswordReset.jsx";
// import OTPVerification from "./pages/otp.jsx";
// import NewPassword from "./pages/NewPassword.jsx";

// function App() {
//   const [currentForm, setCurrentForm] = useState("login");
//   const [email, setEmail] = useState("");

//   const toggleForm = (formName, email = "") => {
//     setCurrentForm(formName);
//     if (email) setEmail(email);
//   };

//   return (
//     <div className="App">
//       {currentForm === "login" && <Login onFormSwitch={toggleForm} />}
//       {currentForm === "register" && <Register onFormSwitch={toggleForm} />}
//       {currentForm === "PasswordReset" && (
//         <PasswordReset onFormSwitch={toggleForm} />
//       )}
//       {currentForm === "OTPVerification" && (
//         <OTPVerification onFormSwitch={toggleForm} email={email} />
//       )}
//       {currentForm === "NewPassword" && (
//         <NewPassword onFormSwitch={toggleForm} email={email} />
//       )}
//     </div>
//   );
// }

// export default App;
