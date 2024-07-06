/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import Jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import catchAsync from "../utils/catchAsync";
import { UnauthorizedError } from "../errors/UnauthorizedErroe";
import { AppError } from "../errors/appErrors";
import { UserModel } from "../module/Users/user.modle";


const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new UnauthorizedError(
        httpStatus.UNAUTHORIZED,
        "You do not have the necessary permissions to access this resource"
      );
    }
    const decoded = Jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;
    const {  userId } = decoded;
    const user = UserModel.findById(userId);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;

