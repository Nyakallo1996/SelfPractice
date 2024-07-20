import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://lekgoabamahlaks:8j8Z6o5PUn4SA6Kx@cluster10.2wesq9t.mongodb.net/cluster10?retryWrites=true&w=majority&appName=Cluster10"
);

app.listen(3001, () => console.log("Server started"));