import { Injectable } from "@angular/core";
import { Project } from "./datatypes/Project";
import * as Mock from "./mockdata";
import axios from "axios";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  constructor() {}

  async retrieveYourProjects(userId: number): Promise<any> {
    try {
      // Assumption: When the user creates a project, they are automatically a member in it (projects.authorID is not checked)
      const response = await axios.get(
        `http://localhost:3001/api/myprojects/ ${userId}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async retrieveExploreProjects(userId: number): Promise<any> {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/exploreprojects/ ${userId}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
