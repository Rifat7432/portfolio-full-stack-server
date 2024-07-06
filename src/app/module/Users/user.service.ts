import { sendEmail } from "../../utils/sendEmail";
import { TUser } from "./user.interface";
import { UserModel } from "./user.modle";

const createUserIntoBD = async (user: TUser) => {
  const isUserExist = await UserModel.findOne({ email: user.email });
  if (isUserExist) {
    throw new Error("User is already exist");
  }
  const result = await UserModel.create(user);
  return result;
};
const getUserFromBD = async () => {
  const result = await UserModel.findOne({
    email: "md.rifat.taluckdar@gmail.com",
  }).select('-password');
  return result;
};
const sendEmailToUser = async (email:{from:string,text:string,subject:string})=>{
   await sendEmail(email.from,email.text,email.subject)
return null
}
export const userService = {
  createUserIntoBD,
  getUserFromBD,
  sendEmailToUser
};
