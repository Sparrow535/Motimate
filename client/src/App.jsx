import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Report from "./pages/Report";
import Home from "./pages/Home";
import Task from "./pages/Task";

function App() {
  return (
    <Router>
      <div className="bg-white transition-all dark:bg-gray-800 dark:text-white h-screen w-screen flex gap-7">
        <Sidebar />
        <div className="w-full me-8 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <Navbar />
            <Routes>
              <Route path="/report" element= {<Report />} />
              <Route path="/home" element = {<Home />} />
              <Route path="/task" element = {<Task />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
