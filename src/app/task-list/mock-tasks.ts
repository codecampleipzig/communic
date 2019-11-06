import { Task } from '../datatypes/Task';

export const TASKS: Task[] = [
   { id: 1,
     name: 'Some Task Name Placeholder',
     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
     status: 'open',
     authorID: 1234,
     teamIDs: [1234, 5678, 9123, 4567, 8901]
   },
   { id: 2,
      name: 'Some Other Task Name Placeholder',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      status: 'open',
      authorID: 1235,
      teamIDs: [1235, 5678, 9123, 4567, 8901]
   },
   { id: 3,
      name: 'Some Task',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      status: 'done',
      authorID: 1237,
      teamIDs: [1237, 5678, 9123, 4567, 8901]
   },
   { id: 4,
      name: 'Some Task',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      status: 'deleted',
      authorID: 1237,
      teamIDs: [1237, 5678, 9123, 4567, 8901]
   },
];