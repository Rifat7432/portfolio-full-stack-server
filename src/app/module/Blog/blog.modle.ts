import { Schema, model } from "mongoose";
import { TBlog } from "./blog.interface";

const blogSchema = new Schema<TBlog>(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);
export const BlogModel = model<TBlog>("Blog", blogSchema);
