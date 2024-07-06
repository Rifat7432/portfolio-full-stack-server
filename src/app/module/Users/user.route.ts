import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/user", userController.createUser);
router.post("/email", userController.mailUser);
router.get("/user", userController.getUser);
export const UserRoutes = router;
