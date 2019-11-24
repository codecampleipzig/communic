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
  @Output() public userJoinEmitter = new EventEmitter<string>();
  public alreadyJoined = false;
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
   * - [ ] needs to compare if user already member and than make te button disappear
   */

  private join(): void {
    this.alreadyJoined = true;
    // this.userJoinEmitter.emit("userJoined");
    this.team.push(this.currentUser);
  }

  private leave(): void {
    this.alreadyJoined = false;
    this.team.splice(this.team.length - 1, 1);
  }
}
