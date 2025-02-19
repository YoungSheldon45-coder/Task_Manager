import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/EditTask.css'

function EditTask() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/tasks/${id}`).then((response) => {
      setTitle(response.data.title);
      setDescription(response.data.description);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/tasks/${id}`, { title, description });
    navigate("/");
  };

  return (
    <div className="editTaskDiv">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default EditTask;
