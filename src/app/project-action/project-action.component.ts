import { Component, OnInit } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

@Component({
  selector: "app-project-action",
  templateUrl: "./project-action.component.html",
  styleUrls: ["./project-action.component.css"]
})
export class ProjectActionComponent implements OnInit {
  projectName = "";
  
  constructor() {}

  ngOnInit() {}

  createProject() {
    // Implement routing once other components are available and routes are set
    // this.router.navigate(['createProject']);
  }
}
