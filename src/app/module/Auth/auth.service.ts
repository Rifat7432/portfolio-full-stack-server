import httpStatus from "http-status";
import { AppError } from "../../errors/appErrors";
import { TLoginUser } from "./auth.interface";
import bcrypt from "bcrypt";
import config from "../../config";
import { createToken } from "./Auth.Util";
import { PasswordError } from "../../errors/passwordError";
import { UserModel } from "../Users/user.modle";

const loginUserIntoDB = async (payLoad: TLoginUser) => {
  const user = await UserModel.findOne({
    email: payLoad?.email,
  });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User is not registered");
  }
  const isPasswordCorrect = await bcrypt.compare(
    payLoad?.password,
    user?.password
  );
  if (!isPasswordCorrect) {
    throw new PasswordError(httpStatus.FORBIDDEN, "Invalid password");
  }
  const jwtPayLoad = {
    userId: user?._id,
    email: user?.email,
  };
  const accessToken = createToken(
    jwtPayLoad,
    config.jwt_access_secret as string,
    "50d"
  );
  const userData = await UserModel.findById(user?._id, { password: 0 });
  return {
    user: userData,
    token: accessToken,
  };
};

export const authenticationServices = {
  loginUserIntoDB,
};
