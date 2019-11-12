export interface Task {
  id: number;
  name: string;
  description: string;
  status: string;
  authorID: number;
  userIDs: number[];
  projectID: number;
  location: string;
 }

 export interface Project {
  id: number;
  title: string;
  description: string;
  goal: string;
  authorID: number;
  userIDs: number[];
 }