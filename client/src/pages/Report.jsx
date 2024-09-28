import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Report = () => {
  return (
    <>
      <div className="bg-white transition-all dark:bg-gray-800 dark:text-white h-screen w-screen flex gap-7">
        <Sidebar />
        <div className="w-full me-8 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <Navbar />
          </div>

        </div>
      </div>
    </>
  );
};

export default Report;
