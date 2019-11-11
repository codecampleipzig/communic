export interface Task {
  id: number;
  name: string;
  description: string;
  status: string;
  authorID: number;
  teamIDs: number[];
  projectID: number;
  location: string;
 }

 export interface Project {
  id: number;
  title: string;
  description: string;
  goal: string;
  memberIds: number[];
  teamIDs: number[];
 }