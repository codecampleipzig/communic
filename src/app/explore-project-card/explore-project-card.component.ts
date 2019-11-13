import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../datatypes/Project';


@Component({
  selector: 'app-explore-project-card',
  templateUrl: './explore-project-card.component.html',
  styleUrls: ['./explore-project-card.component.css']
})
export class ExploreProjectCardComponent implements OnInit {
  @Input() public project: Project;

  constructor() { }

  ngOnInit() {

  }
}
