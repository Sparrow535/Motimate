import {
  House,
  AlignRight,
  AlignLeft,
  ListChecks,
  ChartLine,
  CircleUserRound,
  LogIn,
} from "lucide-react";
import { createContext, useState } from "react";

// Exporting the context for external usage (e.g., in Navbar)
export const SidebarContext = createContext();

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);

  return (
    // Wrapping the entire sidebar with the SidebarContext.Provider
    <SidebarContext.Provider value={{ expanded }}>
      <aside
        className={`${
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
              <a href="#" className="px-3 flex items-center">
                <House className="inline-block w-6 h-6" />
                {expanded && <span className="ml-3">Home</span>}
                {!expanded && (
                  <span className="absolute left-full ml-2 bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Home
                  </span>
                )}
              </a>
            </li>
            <li className="mb-2 rounded hover:bg-gray-50 py-2 group relative">
              <a href="#" className="px-3 flex items-center">
                <ListChecks className="inline-block w-6 h-6" />
                {expanded && <span className="ml-3">MyTask</span>}
                {!expanded && (
                  <span className="absolute left-full ml-2 bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    MyTask
                  </span>
                )}
              </a>
            </li>
            <li className="mb-2 rounded hover:bg-gray-50 py-2 group relative">
              <a href="#" className="px-3 flex items-center">
                <ChartLine className="inline-block w-6 h-6" />
                {expanded && <span className="ml-3">Report</span>}
                {!expanded && (
                  <span className="absolute left-full ml-2 bg-gray-800 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Report
                  </span>
                )}
              </a>
            </li>
          </ul>

          {/* User Profile Section */}
          <div className="flex p-2 m-2 items-center bg-gray-800 rounded-md hover:bg-gray-50">
            <CircleUserRound className="inline-block text-gray-400 w-8 h-8 mr-2 cursor-pointer" />
            {expanded && (
              <div className="flex justify-between items-center cursor-pointer">
                <div>
                  <div className="font-semibold text-sm text-gray-400">
                    Pelden Wangchuk
                  </div>
                  <span className="text-gray-400 text-xs">
                    pelden@gmail.com
                  </span>
                </div>
                <LogIn className="inline-block text-gray-400 w-6 h-6 ml-3 cursor-pointer" />
              </div>
            )}
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}
