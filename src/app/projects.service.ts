import { Injectable } from "@angular/core";
import { Project } from "./datatypes/Project";
import { axiosInstance } from "./axios-instance";

@Injectable({
  providedIn: "root",
})
export class ProjectsService {
  constructor() { }

  retrieveYourProjects(userId: number): Promise<Project[]> {
    return axiosInstance.get(`/myprojects/1`).then(response => {
      return response.data.projects;
    });
  }

  retrieveExploreProjects(userId: number): Promise<Project[]> {
    return axiosInstance.get(`/exploreprojects/1`).then(response => {
      return response.data.projects;
    });
  }
}
