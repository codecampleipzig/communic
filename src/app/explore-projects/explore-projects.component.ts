import { Component, OnInit } from '@angular/core';
import { StoreService } from './../store.service';
import { Project } from '../datatypes/Project';
import { User } from '../datatypes/User';
import {Router } from '@angular/router';

@Component({
  selector: 'app-explore-projects',
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.css']
})
export class ExploreProjectsComponent implements OnInit {
  public exploreProjectsTitle: string = "Explore projects nearby";
  public projects: Array<Project>;
  public currentUser: User;

  constructor(private store: StoreService, private router: Router) {
    this.projects = this.store.retrieveExploreProjects(2);
    console.log(this.projects);
  }
  ngOnInit() {
  }

  public openProject(projectId: number): void {
    this.router.navigate([`project/${projectId}`]);
  }
}
