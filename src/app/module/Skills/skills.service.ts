import { TSkill } from "./skills.interface";
import { SkillModel } from "./skills.modle";

const createSkillIntoBD = async (skill: TSkill) => {
  const isUserExist = await SkillModel.findOne({ name: skill.name });
  if (isUserExist) {
    throw new Error("User is already exist");
  }
  const result = await SkillModel.create(skill);
  return result;
};
const getSkillFromBD = async () => {
  const result = await SkillModel.find();
  return result;
};
export const skillService = {
  createSkillIntoBD,
  getSkillFromBD,
};
