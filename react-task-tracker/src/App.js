import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "School Meeting",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 7th at 12:30pm",
      reminder: false,
    },
  ]);

  // Add Task Function
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, ...task};

    setTasks([...tasks, newTask]);
  };

  // Delete Task Function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder Function
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Show Form Function
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <Header onShowForm={toggleShowForm} showForm={showForm} />
      {showForm && <AddTask onAdd={addTask} /> }
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show!"
      )}
    </div>
  );
}

export default App;
