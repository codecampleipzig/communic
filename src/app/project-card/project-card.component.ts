import { Component, OnInit, Input } from "@angular/core";
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.css"]
})
export class ProjectCardComponent implements OnInit {
  @Input() project;
  private projectName = "Project Name";
  private image = "../assets/project-food1.jpeg";
  private projectDescription = "Project Description";

  constructor(private router: Router) {}

  ngOnInit() {
  }

  public openProject(projectId: number): void {
    this.router.navigate([`project/${projectId}`]);
  }
}
