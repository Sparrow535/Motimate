import { useState } from "react";
import { CheckCircle, Circle } from "lucide-react"; // Lucide icons
import "../css/MyTask.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Task() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Java Quiz",
      description: "Java Concepts",
      priority: "High",
      category: "Java Project",
      dueDate: "12/07/2024",
      status: "Complete",
    },
    {
      id: 2,
      name: "BasketBall",
      description: "BUSF Practice",
      priority: "High",
      category: "Leisure",
      dueDate: "14/07/2024",
      status: "Complete",
    },
    {
      id: 3,
      name: "ADS Practical",
      description: "Practical 3 submission",
      priority: "High",
      category: "ADS",
      dueDate: "16/07/2024",
      status: "In Progress",
    },
    {
      id: 4,
      name: "ACT Homework",
      description: "Critical Thinking",
      priority: "High",
      category: "ACT",
      dueDate: "18/07/2024",
      status: "In Progress",
    },
    {
      id: 5,
      name: "Agile Quiz",
      description: "Topic 1, 2, and 3",
      priority: "Medium",
      category: "Agile Project",
      dueDate: "19/07/2024",
      status: "In Progress",
    },
  ]);

  const [editingTask, setEditingTask] = useState(null);
  const [newTask, setNewTask] = useState({
    id: null,
    name: "",
    description: "",
    priority: "High",
    category: "",
    dueDate: "",
    status: "In Progress",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleInputChange = (e, taskSetter) => {
    const { name, value } = e.target;
    taskSetter((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const saveTask = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === editingTask.id ? editingTask : task))
    );
    setEditingTask(null);
    setIsEditModalOpen(false);
  };

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
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
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
    toast.success("Task added successfully!");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.error("Task deleted successfully!");
    setIsEditModalOpen(false);
  };

  const markAsComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: "Complete" } : task
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">To Do Today</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-black-600"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Task
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
          <thead>
            <tr className="text-left text-gray-600 bg-gray-100">
              <th className="py-3 px-4 font-semibold">Task</th>
              <th className="py-3 px-4 font-semibold">Description</th>
              <th className="py-3 px-4 font-semibold">Priority</th>
              <th className="py-3 px-4 font-semibold">Category</th>
              <th className="py-3 px-4 font-semibold">Status</th>
              <th className="py-3 px-4 font-semibold">Due Date</th>
              <th className="py-3 px-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-t border-gray-200">
                <td className="py-4 px-4 flex items-center space-x-2">
                  {task.status === "Complete" ? (
                    <CheckCircle className="text-green-500" />
                  ) : (
                    <Circle
                      className="text-gray-400 cursor-pointer"
                      onClick={() => markAsComplete(task.id)}
                    />
                  )}
                  <span className="font-medium">{task.name}</span>
                </td>
                <td className="py-4 px-4">{task.description}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      task.category === "Java Project" ||
                      task.category === "Leisure"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {task.category}
                  </span>
                </td>
                <td className="py-4 px-4">
                  {task.status === "Complete" ? (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {task.status}
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      {task.status}
                    </span>
                  )}
                </td>
                <td className="py-4 px-4">{task.dueDate}</td>
                <td className="py-4 px-4 flex space-x-2">
                  <button
                    className="text-black-500 hover:underline"
                    onClick={() => {
                      setEditingTask(task);
                      setIsEditModalOpen(true);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Task Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Add Task</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent the default form submission
                addNewTask();
              }}
            >
              <label className="block mb-2">Task Name</label>
              <input
                type="text"
                name="name"
                value={newTask.name}
                onChange={(e) => handleInputChange(e, setNewTask)}
                className="w-full border rounded-md py-2 px-3 mb-4"
              />

              <label className="block mb-2">Description</label>
              <textarea
                name="description"
                value={newTask.description}
                onChange={(e) => handleInputChange(e, setNewTask)}
                className="w-full border rounded-md py-2 px-3 mb-4"
              />

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

              <label className="block mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={newTask.category}
                onChange={(e) => handleInputChange(e, setNewTask)}
                className="w-full border rounded-md py-2 px-3 mb-4"
              />

              <label className="block mb-2">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={newTask.dueDate}
                onChange={(e) => handleInputChange(e, setNewTask)}
                className="w-full border rounded-md py-2 px-3 mb-4"
              />

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
      )}

      {/* Edit Task Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent the default form submission
                saveTask();
              }}
            >
              {/* Fields are similar to Add Task modal */}
              <label className="block mb-2">Task Name</label>
              <input
                type="text"
                name="name"
                value={editingTask.name}
                onChange={(e) => handleInputChange(e, setEditingTask)}
                className="w-full border rounded-md py-2 px-3 mb-4"
              />

              <label className="block mb-2">Description</label>
              <textarea
                name="description"
                value={editingTask.description}
                onChange={(e) => handleInputChange(e, setEditingTask)}
                className="w-full border rounded-md py-2 px-3 mb-4"
              />

              <label className="block mb-2">Priority</label>
              <select
                name="priority"
                value={editingTask.priority}
                onChange={(e) => handleInputChange(e, setEditingTask)}
                className="w-full border rounded-md py-2 px-3 mb-4"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>

              <label className="block mb-2">Category</label>
              <input
                type="text"
                name="category"
                value={editingTask.category}
                onChange={(e) => handleInputChange(e, setEditingTask)}
                className="w-full border rounded-md py-2 px-3 mb-4"
              />

              <label className="block mb-2">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={editingTask.dueDate}
                onChange={(e) => handleInputChange(e, setEditingTask)}
                className="w-full border rounded-md py-2 px-3 mb-4"
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 text-gray-600"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-black-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 ml-2"
                  onClick={() => deleteTask(editingTask.id)}
                >
                  Delete Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default Task;
