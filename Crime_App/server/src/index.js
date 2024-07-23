import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
import { postsRouter } from "./routes/post.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/posts", postsRouter);

mongoose.connect(
  "mongodb+srv://mahlakametsakabelo:2ZNZojXEDRcs4Wvs@crimeapp.nfzldo7.mongodb.net/?retryWrites=true&w=majority&appName=Crimeapp"
);

app.listen(3001, () => console.log("Server started"));