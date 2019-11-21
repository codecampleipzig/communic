import { Component, OnInit, Input, Inject } from "@angular/core";
import { User } from "../datatypes/User";
import { Project } from "../datatypes/Project";

@Component({
  selector: "app-team-card",
  templateUrl: "./team-card.component.html",
  styleUrls: ["./team-card.component.css"]
})
export class TeamCardComponent implements OnInit {
  /**
   * Get project's object by parent component app-project-page
   */
  @Input() public project: Project;
  @Input() newUser: string;
  alreadyJoined = false;
  public team: User[];

  constructor() {}

  ngOnInit() {
    /**
     * Get projectTeam from project Object
     */
    this.team = this.project.projectTeam;
  }
  /**
   * function that makes the button disapear when joined,
   * - [ ] needs to compare if user already member
   * - [ ] needs to add the user when button is clicked
   */
  private join(): void {
    this.alreadyJoined = true;
  }
}
