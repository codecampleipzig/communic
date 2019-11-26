import { Component, OnInit, Input } from "@angular/core";
import { Project } from "../datatypes/Project";
import { User } from "../datatypes/User";
import { Router } from "@angular/router";
import { ProjectCategoryEnum } from "./../datatypes/enums/ProjectCategoryEnum";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.css"],
})
export class ProjectListComponent implements OnInit {
  @Input() title: ProjectCategoryEnum;
  @Input() projects: Array<Project>;
  currentUser: User;

  constructor(private router: Router) {}

  ngOnInit() {}

  public openProject(projectId: number): void {
    this.router.navigate([`project/${projectId}`]);
  }
}
