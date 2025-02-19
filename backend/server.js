import { configDotenv } from "dotenv";
import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import taskRoutes from './routes/taskRoutes.js'

configDotenv();

const app = express();
app.use(json());
app.use(cors());

connect(process.env.MONGO_URI) // No need to pass deprecated options anymore
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/tasks", taskRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
