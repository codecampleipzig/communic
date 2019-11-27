import { Component, OnInit, Input, Inject } from "@angular/core";
import { User, UserState } from "../datatypes/User";
import { Project } from "../datatypes/Project";
import { StoreService } from "../store.service";

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

  public team: User[];
  public userState: UserState;

  constructor(@Inject(StoreService) private store: StoreService) {
    this.store.user$.subscribe(user => (this.userState = user));
  }

  ngOnInit() {
    this.team = this.project.projectTeam;
  }

  /**
   * Function that adds the user to the ProjectTeam
   */
  join(): void {
    if (!this.joined()) {
      this.store.joinProjectTeam(
        this.project.projectId,
        this.userState.userInformation.userId
      );
    }
  }
  /**
   * Function that deletes the user from the ProjectTeam
   */
  leave(): void {
    if (this.joined()) {
      this.store.leaveProjectTeam(
        this.project.projectId,
        this.userState.userInformation.userId
      );
    }
  }

  /**
   * Check if userState is part of the project
   */
  joined(): boolean {
    return Boolean(
      this.team.find(
        team => team.userId == this.userState.userInformation.userId
      )
    );
  }
}
