import { Schema, model } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    name: { type: String, unique: true, required: true },
    liveLink: { type: String, required: true },
    gitHubClientLink: { type: String, required: true },
    gitHubServerLink: { type: String, required: true },
    images: { type: [String], required: true },
    technology: { type: [String], required: true },
    description: { type: String, required: true },
    details: { type: [String], required: true },
  },
  { timestamps: true }
);
export const ProjectModel = model<TProject>("Project", projectSchema);
