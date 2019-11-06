export interface Task {
   id: number;
   name: string;
   description: string;
   status: string;
   authorID: number;
   teamIDs: number[];
 }