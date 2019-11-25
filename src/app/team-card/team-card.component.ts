import {
  Component,
  OnInit,
  Input,
  Inject,
  EventEmitter,
  Output
} from "@angular/core";
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
  }
  /**
   * Function that adds the user to the ProjecTeam
   *  -[ ] need to comunicate with store
   */

  private join(): void {
    if (!this.team.includes(this.currentUser)) {
      this.alreadyJoined = true;
      this.team.push(this.currentUser);
    }
  }
  /**
   * Function that deletes the user from the ProjecTeam
   *  -[ ] need to comunicate with store
   */
  private leave(): void {
    if (this.team.includes(this.currentUser)) {
      this.alreadyJoined = false;
      this.team.splice(this.team.length - 1, 1);
    }
  }
}
