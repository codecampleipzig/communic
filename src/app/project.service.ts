import { Injectable } from "@angular/core";
import { axiosInstance } from "./axios-instance";
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
    return axiosInstance.get(`/project/${projectId}`).then(response => {
      return response.data.project;
    });
  }

  /**
   * Patch taskStatus, returning newState of the tasks after status was updated.
   * @param taskId ID of the task
   * @param status Status of the task to be updated
   * @returns new Promise
   */
  updateTaskStatus(taskId: number, status: string): Promise<any> {
    return axiosInstance.patch(`/task/${taskId}`, { taskStatus: status }).then(response => {
      return response.data.project;
    });
  }

  /**
   * join userId to project and get new project object from backend.
   * @returns new Promise
   */
  joinProjectTeam(projectId: number, userId: number): Promise<any> {
    return axiosInstance.put(`/projectTeam/${projectId}/member/${userId}`).then(response => {
      return response.data.project;
    });
  }

  /**
   * remove userId from project and get new project object from backend.
   * @returns new Promise
   */
  leaveProjectTeam(projectId: number, userId: number): Promise<any> {
    return axiosInstance.delete(`/projectTeam/${projectId}/member/${userId}`).then(response => {
      return response.data.project;
    });
  }

  /**
   * join userId to task and get new project object from backend
   * @returns new Promise
   */
  joinTaskTeam(projectId: number, taskId: number, userId: number): Promise<any> {
    console.log("join go");
    return axiosInstance.put(`/taskTeam/${taskId}/member/${userId}`).then(response => {
      return response.data.project;
    });
  }

  /**
   * remove userId from task and get new project object from backend
   * @returns new Promise
   */
  leaveTaskTeam(projectId: number, taskId: number, userId: number): Promise<any> {
    return axiosInstance.delete(`/taskTeam/${taskId}/member/${userId}`).then(response => {
      return response.data.project;
    });
  }

  createNewSection(
    projectId: number,
    title: string,
    description: string,
    due: Date,
    status: string,
    creatorId: number,
  ): Promise<any> {
    const body = {
      projectId,
      title,
      description,
      due,
      status,
      creator: creatorId,
    };
    return axiosInstance.post(`/project/${projectId}/section`, body).then(response => {
      return response;
    });
  }

  /**
   * create new task and get new promise object from backend
   * @returns new Promise
   */
  createTask(
    projectId: number,
    taskTitle: string,
    taskDescription: string,
    taskStatus: string,
    taskCreator: number,
    sectionId: number,
  ): Promise<any> {
    const body = {
      projectId,
      taskTitle,
      taskDescription,
      taskStatus,
      taskCreator,
      sectionId,
    };
    return axiosInstance.post(`/project/${projectId}/task`, body).then(response => {
      return response.data.project;
    });
  }

  createNewProject(
    title: string,
    imageUrl: string,
    description: string,
    goal: string,
    creatorId: number,
  ): Promise<any> {
    const body = {
      title,
      imageUrl,
      description,
      goal,
      creator: creatorId,
    };
    return axiosInstance.post(`/project`, body).then(response => {
      return response;
    });
  }
}
