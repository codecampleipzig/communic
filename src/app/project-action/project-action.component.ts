import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-project-action',
  templateUrl: './project-action.component.html',
  styleUrls: ['./project-action.component.css']
})
export class ProjectActionComponent implements OnInit {
  projectName = "";
  plusIconSource: string = "./../../assets/plus.svg";
  breadcrumbIconSource: string = "../../assets/breadcrumb.svg";
  constructor() { }

  ngOnInit() {
  }

  createProject () {
    // Implement routing once other components are available and routes are set
    console.log("Clicked Start a new project!")
  }
}