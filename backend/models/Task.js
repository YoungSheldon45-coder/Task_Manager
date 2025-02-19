import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
});

export default model("Task", TaskSchema);
