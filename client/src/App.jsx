import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/PasswordReset";
import OTP from "./pages/otp";
import NewPassword from "./pages/NewPassword";
// import User from "./User";

export const App = () => {
  return (
    <BrowserRouter>
      {/* <User /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/OTP" element={<OTP />} />
        <Route path="/NewPassword" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
