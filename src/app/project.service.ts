import { Injectable } from '@angular/core';

import * as Mock from "./mockdata";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  /**
   * Poseing GET request, returning project by id.
   * @param id 
   * @returns new Promise
   */
  getProject(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(Mock.projects.find(project => project.projectId == id));
    });
  }

  /**
   * Poseing GET request, returning newState of the tasks after status was updated.
   * @param taskId 
   * @param status 
   * @returns new Promise
   */
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
