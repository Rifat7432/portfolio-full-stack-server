import express from "express";
import { ProjectController } from "./project.controller";


const router = express.Router();

router.post("/project", ProjectController.createProject);
router.get("/project", ProjectController.getProject);
router.get("/project/:id", ProjectController.getAProject);
export const ProjectRoutes = router;
