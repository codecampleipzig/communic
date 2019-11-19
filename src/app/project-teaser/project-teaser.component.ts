import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../datatypes/Project';

@Component({
  selector: "app-project-teaser",
  templateUrl: "./project-teaser.component.html",
  styleUrls: ["./project-teaser.component.css"]
})
export class ProjectTeaserComponent implements OnInit {
  /**
   * Get project's object by parent component app-project-page
   */
  @Input() public project: Project

  constructor() {
  }

  ngOnInit() {}
}
