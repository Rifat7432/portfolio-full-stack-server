import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendRes from "../../utils/sendRes";
import { ProjectService } from "./project.service";

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectService.createProjectIntoBD(req.body);
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project Created successfully",
    data: result,
  });
});
const getProject = catchAsync(async (req, res) => {
  const result = await ProjectService.getProjectFromBD();
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project found successfully",
    data: result,
  });
});
const getAProject = catchAsync(async (req, res) => {
  const result = await ProjectService.getAProjectFromBD(req.params.id);
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project found successfully",
    data: result,
  });
});
export const ProjectController = {
  createProject,
  getProject,
  getAProject,
};
