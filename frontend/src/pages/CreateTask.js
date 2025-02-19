import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/CreateTask.css'

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/tasks", { title, description });
    navigate("/");
  };

  return (
    <div className="createTaskDiv">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default CreateTask;
