import { Component, OnInit, Input, HostListener } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.css"],
})
export class ProjectCardComponent implements OnInit {
  @Input() project;

  private projectName = "Project Name";
  private image = "../assets/project-food1.jpeg";
  private projectDescription = "Project Description";
  private projectDate = "Project Date";

  /**
   * Add HostListener Click Event for the whole Component
   * @param target which get's set to this.project.projectId in the HostListener
   */
  @HostListener("click", ["this.project.projectId"])
  onClick(target) {
    this.openProject(target);
  }

  constructor(private router: Router) {}

  ngOnInit() {}

  public openProject(projectId: number): void {
    this.router.navigate([`project/${projectId}`]);
  }
}
