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
