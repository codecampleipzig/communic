import { Injectable } from '@angular/core';
import { Task, Project } from './dataTypes';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private TASKS: Task[] = [
    { id: 1,
      name: 'Some Task Name Placeholder',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
      status: 'open',
      authorID: 1,
      teamIDs: [1234, 5678, 9123, 4567, 8901],
      projectID: 9435,
      location: 'starter'
    },
    { id: 2,
        name: 'Some Other Task Name Placeholder',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        status: 'open',
        authorID: 1235,
        teamIDs: [1235, 5678, 9123, 4567, 8901],
        projectID: 9435,
        location: 'starter'
    },
    { id: 3,
        name: 'Some Task',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        status: 'done',
        authorID: 1237,
        teamIDs: [1237, 5678, 9123, 4567, 8901],
        projectID: 9435,
        location: 'starter'
    },
    { id: 4,
        name: 'Some Task',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        status: 'deleted',
        authorID: 1237,
        teamIDs: [1237, 5678, 9123, 4567, 8901],
        projectID: 9435,
        location: 'starter'
    },
  ];

  private projects: Project[] = [
    { id: 9435,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
      goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
      memberIds: [1234, 5678, 9123, 4567, 8901],
      teamIDs: [1234, 5678, 9123, 4567, 8901],
    },
  ];

  constructor() { }

  retrieveTask(id: number): Task {
    return this.TASKS.find(task => task.id == id);
  }

  retrieveTasks(projectID: number, location: string): Task[] {
    return this.TASKS.filter(task => task.projectID == projectID && task.location == location);
  }
}
