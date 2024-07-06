import express from "express";
import { BlogController } from "./blog.controller";

const router = express.Router();

router.post("/blog", BlogController.createBlog);
router.get("/blogs", BlogController.getBlog);
router.get("/blog/:id", BlogController.getABlog);
router.patch("/blog/:id", BlogController.updateBlog);
export const BlogRoutes = router;
