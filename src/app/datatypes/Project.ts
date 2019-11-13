export interface Project {
   id: number;
   title: string;
   description: string;
   goal: string;
   authorID: number;
   userIDs: number[];
   imageUrl: string;
}
