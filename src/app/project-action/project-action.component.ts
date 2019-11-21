import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-project-action',
  templateUrl: './project-action.component.html',
  styleUrls: ['./project-action.component.css']
})
export class ProjectActionComponent implements OnInit {
  projectName = "";
  plusIconSource: string = "./../../assets/plus.svg";
  breadcrumbIconSource: string = "../../assets/breadcrumb.svg";
  
  constructor(private router: Router) { }


  ngOnInit() {
  }

  createProject () {
    this.router.navigate(['startnewproject'])
  }
}

