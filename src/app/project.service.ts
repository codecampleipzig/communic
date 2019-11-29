import { Injectable } from "@angular/core";

import * as Mock from "./mockdata";
import axios from "axios";
import { environment } from "../environments/environment";
import { Project } from "./datatypes/Project";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  constructor() {}

  /**
   * GET full project object from backend
   * @returns new Promise
   */
  getProject(projectId: number): Promise<Project> {
    return axios
      .get(`${environment.api_url}/project/${projectId}`)
      .then(response => {
        return response.data.project;
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
   * join userId to projectId and get new project object from backend.
   * @returns new Promise
   */
  joinProjectTeam(projectId: number, userId: number): Promise<any> {
    return axios
      .put(`${environment.api_url}/projectTeam/${projectId}/member/${userId}`)
      .then(response => {
        return response.data.project;
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
