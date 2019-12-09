import { User } from "./User";
import { Section } from "./Section";

export interface Project {
  projectId: number; // for now (later will be an autogenerated key)
  projectTitle: string;
  projectImageUrl: string;
  projectDescription: string;
  projectGoal: string;
  projectStatus: string;
  projectCreator: User;
  projectTeam: User[];
  projectSections: Section[];
}
