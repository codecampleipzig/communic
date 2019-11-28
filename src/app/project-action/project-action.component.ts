import { Component, OnInit, Inject } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";

@Component({
  selector: "app-project-action",
  templateUrl: "./project-action.component.html",
  styleUrls: ["./project-action.component.css"],
})
export class ProjectActionComponent implements OnInit {
  projectName = "";

  constructor() {}

  ngOnInit() {}
}
