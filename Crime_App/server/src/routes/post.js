import express from "express";
import mongoose from "mongoose";
import { PostModel } from "../models/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
    
    try {
        const response = await PostModel.find({});
        res.json(response)
    } catch (err) {
        res.json(err);
    }
});

router.post("/", async (req, res) => {
    const post = new PostModel(req.body);
  try {
    const response = await post.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});


export { router as postsRouter };
