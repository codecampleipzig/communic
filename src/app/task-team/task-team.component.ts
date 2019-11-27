import { Component, OnInit, Input, Inject } from "@angular/core";
import { Task } from "../datatypes/Task";
import { UserState } from "../datatypes/User";
import { StoreService } from "../store.service";

@Component({
  selector: "app-task-team",
  templateUrl: "./task-team.component.html",
  styleUrls: ["./task-team.component.css"]
})
export class TaskTeamComponent implements OnInit {
  public userState: UserState;

  @Input() task: Task;

  constructor(@Inject(StoreService) private store: StoreService) {
    this.store.user$.subscribe(user => (this.userState = user));
  }

  ngOnInit() {}

  /**
   * Join Task function
   * - [ ] Check wheter User has already joined currentProject.userIDs
   * - [ ] Add current User to task.userIDs
   */
  joinTask(): void {
    /* Placeholder. Needs to be replaced with something like task.userIDs.find(currentUser) */
    console.log("User joined");
  }

  leaveTask(): void {
    /* Placeholder. Needs to be replaced with something like task.userIDs.find(currentUser) */
    console.log("User left");
  }

  joined(): boolean {
    return Boolean(
      this.task.taskTeam.find(
        taskTeam => taskTeam.userId == this.userState.userInformation.userId
      )
    );
  }
}
