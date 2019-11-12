import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.css"]
})
export class ProjectCardComponent implements OnInit {
  @Input() private project;
  private projectName = "Project Name";
  private image = "../assets/testimage1.jpeg";
  private projectDescription = "Project Description";

  constructor() {}

  readMore () {console.log ("replace this with project")}

  ngOnInit() {
  }
}
