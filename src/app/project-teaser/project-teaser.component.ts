import { Component, OnInit, Input, Inject } from "@angular/core";
import { Project } from "../datatypes/Project";
import { StoreService } from "../store.service";
import { UserState, User } from "../datatypes/User";

@Component({
  selector: "app-project-teaser",
  templateUrl: "./project-teaser.component.html",
  styleUrls: ["./project-teaser.component.css"],
})
export class ProjectTeaserComponent implements OnInit {
  /**
   * Get project's object by parent component app-project-page
   */
  @Input() public project: Project;

  public team: User[];
  public userState: UserState;

  constructor(@Inject(StoreService) private store: StoreService) {
    this.store.user$.subscribe(user => (this.userState = user));
  }

  ngOnInit() {}

  /**
   * Function that adds the user to the ProjectTeam
   */
  join(): void {
    if (!this.joined()) {
      this.store.joinProjectTeam(this.project.projectId, this.userState.userInformation.userId);
    }
  }
  /**
   * Function that deletes the user from the ProjectTeam
   */
  leave(): void {
    if (this.joined()) {
      this.store.leaveProjectTeam(this.project.projectId, this.userState.userInformation.userId);
    }
  }

  /**
   * Check if userState is part of the project
   */
  joined(): boolean {
    return Boolean(this.project.projectTeam.find(team => team.userId == this.userState.userInformation.userId));
  }
}
