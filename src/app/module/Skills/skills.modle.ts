import { Schema, model } from "mongoose";
import { TSkill } from "./skills.interface";

const skillSchema = new Schema<TSkill>(
  {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const SkillModel = model<TSkill>("Skill", skillSchema);
