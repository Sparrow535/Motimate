import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div className="w-full h-15 py-4 me-8 flex justify-between border-b dark:border-b-gray-700 ">
      <h1 className="font-semibold  text-xl text-gray-600 dark:text-indigo-400">
        {title}
      </h1>
      <div className="flex justify-between items-center gap-8">
        <button className="font-semibold border-spacing-1 p-1  rounded-md bg-black text-gray-400">
          <Plus className="inline-block text-gray-400 w-7 h-7 mr-2 cursor-pointer" />
          <p className="inline-block pe-1">Add Task</p>
        </button>
        <Link to="/UserProfile" className="inline-block rounded-full bg-black w-9 h-9 mr-2 cursor-pointer">
        
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
