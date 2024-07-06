import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

import { authenticationServices } from "./auth.service";
import sendRes from "../../utils/sendRes";

const loginUser = catchAsync(async (req, res) => {
  const result = await authenticationServices.loginUserIntoDB(req.body);
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login successful",
    data: result,
  });
});

export const AuthenticationControllers = {
  loginUser,
};
