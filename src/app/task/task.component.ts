import { Component, OnInit, Input, HostBinding, Inject } from "@angular/core";
import { Task } from "../datatypes/Task";
import { StoreService } from "../store.service";
import { UserState } from "../datatypes/User";
import { Project } from "../datatypes/Project";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  public userState: UserState;

  /**
   * Import task object
   */
  @Input() task: Task;
  @Input() project: Project;

  /**
   * Add Task Status as Class to the host Element
   * could be .status-open, .status-done, .status-deleted
   */
  @HostBinding("class")
  get hostClasses(): string {
    return (
      (this.task ? "status-" + this.task.taskStatus : "") +
      (this.joined() ? " joined" : "")
    );
  }

  constructor(@Inject(StoreService) private store: StoreService) {
    this.store.user$.subscribe(user => (this.userState = user));
  }

  /**
   * Change task object @status to deleted/open on click of delete/restore button
   */
  public delete() {
    this.task.taskStatus = "deleted";
  }

  public restore() {
    this.task.taskStatus = "open";
  }

  ngOnInit() {}

  toggleStatus(): void | boolean {
    const status = this.task.taskStatus;

    if (!this.joined() || status == "deleted") {
      return false;
    }

    if (status == "done") {
      this.store.updateTaskStatus(
        this.task.projectId,
        this.task.taskId,
        "open"
      );
    } else if (status == "open") {
      this.store.updateTaskStatus(
        this.task.projectId,
        this.task.taskId,
        "done"
      );
    }
  }

  joined(): boolean {
    const joinedTask = Boolean(
      this.task.taskTeam.find(
        taskTeam => taskTeam.userId == this.userState.userInformation.userId
      )
    );
    const joinedProject = Boolean(
      this.project.projectTeam.find(
        team => team.userId == this.userState.userInformation.userId
      )
    );
    return joinedTask && joinedProject;
  }
}
