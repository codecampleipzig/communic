import { Injectable } from "@angular/core";
import { Project } from "./datatypes/Project";
import * as Mock from "./mockdata";
import axios from "axios";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  constructor() {}

  retrieveYourProjects(userId: number): Promise<Project[]> {
    return axios.get(`${environment.api_url}/myprojects/1`).then(response => {
      return response.data.projects;
    });
  }

  retrieveExploreProjects(userId: number): Promise<Project[]> {
    return axios
      .get(`${environment.api_url}/exploreprojects/1`)
      .then(response => {
        return response.data.projects;
      });
  }
}
