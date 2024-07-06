import express from "express";
import { skillController } from "./skills.controller";


const router = express.Router();

router.post("/skill", skillController.createSkill);
router.get("/skills", skillController.getSkill);
export const SkillRoutes = router;
