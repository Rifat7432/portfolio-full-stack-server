import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendRes from "../../utils/sendRes";
import { skillService } from "./skills.service";

const createSkill = catchAsync(async (req, res) => {
  const result = await skillService.createSkillIntoBD(req.body);
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill Created successfully",
    data: result,
  });
});
const getSkill = catchAsync(async (req, res) => {
  const result = await skillService.getSkillFromBD();
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "skill found successfully",
    data: result,
  });
});
export const skillController = {
  createSkill,
  getSkill,
};
