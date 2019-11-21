import { Injectable } from '@angular/core';

import * as Mock from "./mockdata";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProject(id: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve(Mock.projects.find(project => project.projectId == id));
    });

  }

}
