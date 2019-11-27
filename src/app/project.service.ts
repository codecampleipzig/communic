import { Injectable } from "@angular/core";

import * as Mock from "./mockdata";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  constructor() {}

  /**
   * Poseing GET request, returning project by id.
   * @returns new Promise
   */
  getProject(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(Mock.projects.find(project => project.projectId == id));
    });
  }

  /**
   * Poseing GET request, returning newState of the tasks after status was updated.
   * @returns new Promise
   */
  updateTaskStatus(taskId: number, status: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const newState = [...Mock.tasks];
      newState.find(task => task.taskId == taskId).taskStatus = status;
      resolve(newState);
    });
  }

  /**
   * Poseing POST request, returning newState of the project after user was added by userId.
   * @returns new Promise
   */
  joinProjectTeam(projectId: number, userId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const newState = [...Mock.projects];
      const project = newState.find(p => p.projectId == projectId);
      const user = Mock.users.find(u => u.userId == userId);

      project.projectTeam.push(user);
      resolve(project);
    });
  }

  /**
   * Poseing POST request, returning newState of the project after user was removed by userId.
   * @returns new Promise
   */
  leaveProjectTeam(projectId: number, userId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const newState = [...Mock.projects];
      const project = newState.find(p => p.projectId == projectId);
      const userIndex = project.projectTeam.findIndex(u => u.userId == userId);

      project.projectTeam.splice(userIndex, 1);
      resolve(project);
    });
  }

  /**
   * Poseing POST request, returning newState of the project after user was added to taskTeam by userId.
   * @returns new Promise
   */
  joinTaskTeam(
    projectId: number,
    taskId: number,
    userId: number
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const newState = [...Mock.projects];
      const project = newState.find(p => p.projectId == projectId);
      const user = Mock.users.find(u => u.userId == userId);

      project.projectTasks.find(t => t.taskId == taskId).taskTeam.push(user);
      resolve(project);
    });
  }

  /**
   * Poseing POST request, returning newState of the project after user was removed of taskTeam by userId.
   * @returns new Promise
   */
  leaveTaskTeam(
    projectId: number,
    taskId: number,
    userId: number
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const newState = [...Mock.projects];
      const project = newState.find(p => p.projectId == projectId);
      const userIndex = project.projectTasks
        .find(t => t.taskId == taskId)
        .taskTeam.findIndex(u => u.userId == userId);

      project.projectTasks
        .find(t => t.taskId == taskId)
        .taskTeam.splice(userIndex, 1);
      resolve(project);
    });
  }
}
