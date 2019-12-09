import { Task } from "./Task";
import { User } from "./User";

export interface Section {
  sectionId: number;
  projectId: number;
  sectionTitle: string;
  sectionDescription: string;
  sectionDue: Date;
  sectionStatus: string;
  sectionCreator: User;
  projectTasks: Task[];
}
