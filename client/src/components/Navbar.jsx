import { Plus, CircleUserRound } from "lucide-react";
//  import { AddTask } from "./AddTask";

const Navbar = () => {
  return (
    <div className="w-full h-15 py-4 me-8 flex justify-between border-b dark:border-b-gray-700 ">

      <h1 className="font-semibold  text-xl text-gray-600 dark:text-indigo-400">
        REPORT
      </h1>
      <div className="flex justify-between items-center gap-8">
        {/* <AddTask/> */}
        <Plus>AddTask</Plus>
        <CircleUserRound>User</CircleUserRound>
      </div>
    </div>
  );
};

export default Navbar;
