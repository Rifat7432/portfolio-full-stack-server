import { TProject } from "./project.interface";
import { ProjectModel } from "./project.modle";

const createProjectIntoBD = async (project: TProject) => {
  const result = await ProjectModel.create(project);
  return result;
};
const getProjectFromBD = async () => {
  const result = await ProjectModel.find();

  return result;
};
const getAProjectFromBD = async (id: string) => {
  const result = await ProjectModel.findById(id);

  return result;
};
export const ProjectService = {
  createProjectIntoBD,
  getProjectFromBD,
  getAProjectFromBD,
};
