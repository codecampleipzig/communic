import { Injectable } from "@angular/core";
import { Project } from "./datatypes/Project";
import { axiosInstance } from "./axios-instance";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  constructor() { }

  /**
   * Get projects where current user is member to fill the "Your Projects" section on Home page
   * @param userId Id of the currently logged-in user
   */
  retrieveYourProjects(userId: number): Promise<Project[]> {
    return axiosInstance.get(`/myprojects/1`).then(response => {
      return response.data.projects;
    });
  }

  /**
   * Get projects where current user is NOT member to fill the "Explore Projects" section on Home page
   * @param userId Id of the currently logged-in user
   */
  retrieveExploreProjects(userId: number): Promise<Project[]> {
    return axiosInstance.get(`/exploreprojects/1`).then(response => {
      return response.data.projects;
    });
  }
}
