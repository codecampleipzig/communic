import { Injectable } from '@angular/core';
import { Project } from './datatypes/Project';
import * as Mock from './mockdata';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  retrieveYourProjects(userId: number): Promise<Project[]> {
    // TODO: Once we implement API calls to server, 
    // change this to axios.get('/yourprojects/:userId')
    return new Promise<any>((resolve, reject) => {
      // Logic for filtering yourProjects:
      // Assumption: When the user creates a project, they are automatically a member in it (projects.authorID is not checked)
      const yourProjects = Mock.ExposeForTesting.projects.filter(project => project.userIDs.some(id => id == userId));
      resolve(yourProjects);
      reject([]);
    });
  }

  retrieveExploreProjects(userId: number): Promise<Project[]> {
    // TODO: Once we implement API calls to server, 
    // change this to axios.get('/exploreprojects/:userId')
    return new Promise<any>((resolve, reject) => {
      const exploreProjects = Mock.ExposeForTesting.projects.filter(project => !project.userIDs.some(id => id == userId))
      resolve(exploreProjects);
      reject([]);
    })
  }

}
