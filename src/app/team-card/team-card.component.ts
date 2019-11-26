import { Component, OnInit, Input } from "@angular/core";
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
  @Input() public currentUser: User;
  public alreadyJoined = false;
  public team: User[];

  constructor() {}

  ngOnInit() {
    /**
     * Get projectTeam from project Object
     * - [ ] check if user is already part of the team
     */
    this.team = this.project.projectTeam;
    // Filter if team contains current user and set already joined to true if so
    if (this.team && this.team != []) {
      this.alreadyJoined =
        this.team.filter(() => this.currentUser) != [] ? true : false;
    }
  }

  /**
   * Function that adds the user to the ProjecTeam
   *  -[ ] need to comunicate with store
   */
  join(): void {
    this.alreadyJoined = true;
    this.team.push(this.currentUser);
  }
  /**
   * Function that deletes the user from the ProjecTeam
   *  -[ ] need to comunicate with store
   */
  private leave(): void {
    this.alreadyJoined = false;
    this.team.splice(this.team.length - 1, 1);
  }
}
