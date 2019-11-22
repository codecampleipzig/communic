import { Injectable } from '@angular/core';

import * as Mock from "./mockdata";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProject(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(Mock.projects.find(project => project.projectId == id));
    });
  }

  updateTaskStatus(taskId: number, status: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const newState = [...Mock.tasks];
      newState.find(task => task.taskId == taskId).taskStatus = status;
      resolve(
        newState
      )
    })
  }

}
