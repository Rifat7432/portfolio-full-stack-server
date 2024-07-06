import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendRes from "../../utils/sendRes";
import { userService } from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const result = await userService.createUserIntoBD(req.body);
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user Created successfully",
    data: result,
  });
});
const getUser = catchAsync(async (req, res) => {
  const result = await userService.getUserFromBD();
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user found successfully",
    data: result,
  });
});
const mailUser = catchAsync(async (req, res) => {
  const result = await userService.sendEmailToUser(req.body);
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Email send successfully",
    data: result,
  });
});
export const userController = {
  createUser,
  getUser,
  mailUser
};
