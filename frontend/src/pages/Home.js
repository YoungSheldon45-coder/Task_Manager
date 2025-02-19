import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/Home.css'

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`).then(() => {
      setTasks(tasks.filter(task => task._id !== id));
    });
  };

  return (
    <div className="homeDiv">
      <h1>Task Manager</h1>
      <Link to="/create">Create Task</Link>
      {tasks.map((task) => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
          <Link to={`/edit/${task._id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
