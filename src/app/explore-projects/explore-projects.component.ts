import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from './../store.service';
import { Project } from '../datatypes/Project';
import { User } from '../datatypes/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-projects',
  templateUrl: './explore-projects.component.html',
  styleUrls: ['./explore-projects.component.css']
})
export class ExploreProjectsComponent implements OnInit {
  public title: string;
  public projects: Array<Project>;
  public currentUser: User;
  @Input() category: string;

  constructor(private store: StoreService, private router: Router) {
   
  }
  ngOnInit() {
    console.log(`Category before is: ${this.category}`);
    if (this.category == "exploreProjects") {
      this.store.projects$.subscribe((projects) => {
        this.projects = projects;
        this.title = "Explore Projects";
      });
    } else {
      this.store.projects$.subscribe((projects) => {
        this.projects = projects;
        this.title = "Your Projects";
      });
    }

    console.log(this.projects);
  }

  public openProject(projectId: number): void {
    this.router.navigate([`project/${projectId}`]);
  }
}
