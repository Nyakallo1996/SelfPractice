import mongoose from "mongoose";


const PostsSchema = new mongoose.Schema({
  crime: {
    type: String,
    required: true,
  },
  discription: { type: String, required: true },
  time: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

export const PostModel = mongoose.model("posts", PostsSchema);
