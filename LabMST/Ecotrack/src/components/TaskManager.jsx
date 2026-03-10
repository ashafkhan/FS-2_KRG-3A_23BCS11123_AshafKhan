import { useState } from "react";
import useForm from "../hooks/useForm";

export default function TaskManager() {

  const { values, handleChange, resetForm } = useForm({
    title: "",
    priority: "Low"
  });

  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: values.title,
      priority: values.priority
    };

    setTasks((prev) => [...prev, newTask]);

    resetForm();
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Task Tracker</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>

        <div>
          <label>Task Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Priority</label>
          <br />
          <select
            name="priority"
            value={values.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <br />

        <button type="submit">Add Task</button>

      </form>

      <hr />

      {/* Task List */}
      <h3>Tasks</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.priority}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}