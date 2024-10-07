import {
  House,
  AlignRight,
  AlignLeft,
  ListChecks,
  ChartLine,
  CircleUserRound,
  LogOut,
  Plus,
} from "lucide-react";

import { createContext, useState } from "react";
import { Link } from "react-router-dom";

export const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [isSidebarVisible] = useState(true); // New state to handle sidebar visibility on smaller screens

  return (
    // Wrapping the entire sidebar with the SidebarContext.Provider
    <SidebarContext.Provider value={{ expanded }}>
      {/* Sidebar and Menu Button */}
      <aside
        className={`${isSidebarVisible ? "" : "hidden"} md:block ${
          expanded ? "w-60" : "w-20"
        } h-screen transition-all duration-300 relative`}
      >
        <nav className="h-full flex flex-col bg-gray-950 border-r shadow-sm">
          {/* Header Section */}
          <div className="p-4 pb-2 flex justify-between items-center">
            <h2
              className={`text-gray-400 font-bold cursor-pointer ${
                expanded ? "block" : "hidden"
              }`}
            >
              Motimate
            </h2>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-50"
            >
              {expanded ? <AlignRight /> : <AlignLeft />}
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="mt-10 text-gray-400 flex-1 px-3">
            <li className="mb-2 rounded hover:bg-gray-50 py-2 group relative">
              <Link to="/home" className="px-3 flex items-center">
                <House className="inline-block w-6 h-6" />
                {expanded && <span className="ml-3">Home</span>}
                {!expanded && (
                  <span className="absolute left-full ml-2 bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Home
                  </span>
                )}
              </Link>
            </li>
            <li className="mb-2 rounded hover:bg-gray-50 py-2 group relative">
              <Link to="/task" className="px-3 flex items-center">
                <ListChecks className="inline-block w-6 h-6" />
                {expanded && <span className="ml-3">MyTask</span>}
                {!expanded && (
                  <span className="absolute left-full ml- bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    MyTask
                  </span>
                )}
              </Link>
            </li>
            <li className="mb-2 rounded hover:bg-gray-50 py-2 group relative">
              <Link to="/report" className="px-3 flex items-center">
                <ChartLine className="inline-block w-6 h-6" />
                {expanded && <span className="ml-3">Report</span>}
                {!expanded && (
                  <span className="absolute left-full ml-5 bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Report
                  </span>
                )}
              </Link>
            </li>
            <button className="flex font-semibold text-gray-400 mt-10  hover:bg-gray-50  group rounded p-2">
              {expanded ? (
                <>
                  <p className="pe-1">Category</p>
                  <Plus className="text-gray-400 w-6 h-6 ml-20 cursor-pointer" />
                </>
              ) : (
                <Plus className="text-gray-400 ml-1 w-6 h-6 cursor-pointer" />
              )}
              {!expanded && (
                <span className="absolute left-full ml-2 bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Category
                </span>
              )}
            </button>
          </ul>

          {/* User Profile Section */}
          <div className="flex p-2 m-2 items-center bg-gray-800 rounded-md hover:bg-gray-50">
            {expanded ? (
              <div className="flex justify-between items-center cursor-pointer">
                <CircleUserRound className="inline-block text-gray-400 w-8 h-8 mr-2 cursor-pointer" />
                <div>
                  <div className="font-semibold text-xs text-gray-400">
                    Pelden Wangchuk
                  </div>
                  <span className="text-gray-400 text-xs">
                    pelden@gmail.com
                  </span>
                </div>
                <LogOut className="inline-block text-gray-400 w-6 h-6 ml-3 cursor-pointer" />
              </div>
            ) : (
              <LogOut className="inline-block text-gray-400 w-6 h-6 ml-3 cursor-pointer" />
            )}
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}
