import express from 'express';
import { authenticationZodSchema } from './auth.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AuthenticationControllers } from './auth.controller';




const router = express.Router();

router.post('/login',validateRequest(authenticationZodSchema.loginUserZodSchema),AuthenticationControllers.loginUser);


export const authRoutes = router;
