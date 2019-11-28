import { Component, OnInit, Inject, Input } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { Project } from "../datatypes/Project";

@Component({
  selector: "app-project-action",
  templateUrl: "./project-action.component.html",
  styleUrls: ["./project-action.component.css"]
})
export class ProjectActionComponent implements OnInit {
  @Input() public project: Project;

  constructor() {}

  ngOnInit() {}
}
