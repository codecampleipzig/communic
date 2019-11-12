import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-teaser',
  templateUrl: './project-teaser.component.html',
  styleUrls: ['./project-teaser.component.css']
})
export class ProjectTeaserComponent implements OnInit {

  private myVariable: string = "Headline";
  constructor() { }

  ngOnInit() {
  }

}
