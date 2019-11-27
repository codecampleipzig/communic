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
   * Function that adds the user to the ProjectTeam
   */
  join(): void {
    if (!this.joined()) {
      this.store.joinTaskTeam(
        this.task.projectId,
        this.task.taskId,
        this.userState.userInformation.userId
      );
    }
  }
  /**
   * Function that deletes the user from the ProjectTeam
   */
  leave(): void {
    if (this.joined()) {
      this.store.leaveTaskTeam(
        this.task.projectId,
        this.task.taskId,
        this.userState.userInformation.userId
      );
    }
  }

  joined(): boolean {
    return Boolean(
      this.task.taskTeam.find(
        taskTeam => taskTeam.userId == this.userState.userInformation.userId
      )
    );
  }
}
