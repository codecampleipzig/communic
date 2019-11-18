import { Component, OnInit } from '@angular/core';
import { Project } from '../datatypes/Project';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-project-teaser',
  templateUrl: './project-teaser.component.html',
  styleUrls: ['./project-teaser.component.css']
})
export class ProjectTeaserComponent implements OnInit {

  private project: Project;

  constructor( private store: StoreService) {
    /**
     * Get Project by ID
     */
    this.project = this.store.retrieveProject(1);
  }

  ngOnInit() {
  }

}
