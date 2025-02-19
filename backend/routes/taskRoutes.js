// routes/taskRoutes.js
import { Router } from "express";
import Task from "../models/Task.js"; // Import the model correctly
const router = Router();

// Create Task
router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

// Read Tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find(); // Use Task.find() directly
  res.json(tasks);
});

// Update Task
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// Delete Task
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

export default router;
