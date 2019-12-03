import { Injectable } from "@angular/core";

import * as Mock from "./mockdata";
import axios from "axios";
import { environment } from "../environments/environment";
import { Project } from "./datatypes/Project";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  constructor() {}

  /**
   * GET full project object from backend
   * @returns new Promise
   */
  getProject(projectId: number): Promise<Project> {
    return axios.get(`${environment.api_url}/project/${projectId}`).then(response => {
      return response.data.project;
    });
  }

  /**
   * Poseing GET request, returning newState of the tasks after status was updated.
   * @param taskId ID of the task
   * @param status Status of the task to be updated
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
    return axios.put(`${environment.api_url}/projectTeam/${projectId}/member/${userId}`).then(response => {
      return response.data.project;
    });
  }

  /**
   * Poseing POST request, returning newState of the project after user was removed by userId.
   * @returns new Promise
   */
  leaveProjectTeam(projectId: number, userId: number): Promise<any> {
    return axios.delete(`${environment.api_url}/projectTeam/${projectId}/member/${userId}`).then(response => {
      return response.data.project;
    });
  }

  /**
   * Poseing POST request, returning newState of the project after user was added to taskTeam by userId.
   * @returns new Promise
   */
  joinTaskTeam(projectId: number, taskId: number, userId: number): Promise<any> {
    console.log("join go");
    return axios.put(`${environment.api_url}/taskTeam/${taskId}/member/${userId}`).then(response => {
      return response.data.project;
    });
  }

  /**
   * Poseing POST request, returning newState of the project after user was removed of taskTeam by userId.
   * @returns new Promise
   */
  leaveTaskTeam(projectId: number, taskId: number, userId: number): Promise<any> {
    return axios.delete(`${environment.api_url}/taskTeam/${taskId}/member/${userId}`).then(response => {
      return response.data.project;
    });
  }
}
