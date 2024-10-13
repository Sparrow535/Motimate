import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddTask({ isModalOpen, setIsModalOpen }) {
  // State for new task
  const [newTask, setNewTask] = useState({
    id: null,
    name: "",
    description: "",
    priority: "High",
    category: "",
    dueDate: "",
    status: "In Progress",
  });

  const [tasks, setTasks] = useState([]); // Stores all tasks

  // Input change handler
  const handleInputChange = (e, setter) => {
    const { name, value } = e.target;
    setter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to add a new task
  const addNewTask = () => {
    if (
      !newTask.name ||
      !newTask.description ||
      !newTask.category ||
      !newTask.dueDate
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Add the new task to the tasks list
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);

    // Reset the modal and task form
    setIsModalOpen(false);
    setNewTask({
      id: null,
      name: "",
      description: "",
      priority: "High",
      category: "",
      dueDate: "",
      status: "In Progress",
    });

    // Display success notification
    toast.success("Task added successfully!");
  };

  if (!isModalOpen) return null; // Do not render anything if modal is closed

  return (
    <div>
      {/* Modal content */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">Add Task</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent the default form submission
              addNewTask();
            }}
          >
            {/* Task Name */}
            <label className="block mb-2">Task Name</label>
            <input
              type="text"
              name="name"
              value={newTask.name}
              onChange={(e) => handleInputChange(e, setNewTask)}
              className="w-full border rounded-md py-2 px-3 mb-4"
              placeholder="Enter task name"
            />

            {/* Description */}
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={newTask.description}
              onChange={(e) => handleInputChange(e, setNewTask)}
              className="w-full border rounded-md py-2 px-3 mb-4"
              placeholder="Enter task description"
            />

            {/* Priority */}
            <label className="block mb-2">Priority</label>
            <select
              name="priority"
              value={newTask.priority}
              onChange={(e) => handleInputChange(e, setNewTask)}
              className="w-full border rounded-md py-2 px-3 mb-4"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            {/* Category */}
            <label className="block mb-2">Category</label>
            <input
              type="text"
              name="category"
              value={newTask.category}
              onChange={(e) => handleInputChange(e, setNewTask)}
              className="w-full border rounded-md py-2 px-3 mb-4"
              placeholder="Enter task category"
            />

            {/* Due Date */}
            <label className="block mb-2">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={newTask.dueDate}
              onChange={(e) => handleInputChange(e, setNewTask)}
              className="w-full border rounded-md py-2 px-3 mb-4"
            />

            {/* Modal actions */}
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-4 text-gray-600"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-black-600"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
}

// Define prop types for AddTask component
AddTask.propTypes = {
  isModalOpen: PropTypes.bool.isRequired, // isModalOpen should be a boolean and is required
  setIsModalOpen: PropTypes.func.isRequired, // setIsModalOpen should be a function and is required
};

export default AddTask;
