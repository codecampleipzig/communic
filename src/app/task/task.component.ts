import { Component, OnInit, Input, HostBinding, Inject } from "@angular/core";
import { Task } from "../datatypes/Task";
import { StoreService } from "../store.service";
import { UserState } from "../datatypes/User";
import { Project } from "../datatypes/Project";

type taskOrProject = "task" | "project" | "both";

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
      (this.joined("task") ? " joined" : "")
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

  toggleTaskStatus(): void | boolean {
    const status = this.task.taskStatus;

    if (!this.joined("both") || status == "deleted") {
      console.log("not allowed");
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

  /**
   * Function that adds the user to the ProjectTeam
   */
  join(): void {
    if (!this.joined("project")) {
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
    if (this.joined("project")) {
      this.store.leaveTaskTeam(
        this.task.projectId,
        this.task.taskId,
        this.userState.userInformation.userId
      );
    }
  }

  joined(ask?: taskOrProject): boolean {
    const joinedProject = Boolean(
      this.project.projectTeam.find(
        team => team.userId == this.userState.userInformation.userId
      )
    );
    const joinedTask = Boolean(
      this.task.taskTeam.find(
        taskTeam => taskTeam.userId == this.userState.userInformation.userId
      )
    );

    if (ask == "task") {
      return joinedTask;
    }
    if (ask == "project") {
      return joinedProject;
    }
    if (ask == "both") {
      return joinedTask && joinedProject;
    }
    return joinedTask || joinedProject;
  }
}
