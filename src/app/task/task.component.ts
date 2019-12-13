import { Component, OnInit, Input, HostBinding, Inject } from "@angular/core";
import { Task } from "../datatypes/Task";
import { StoreService } from "../store.service";
import { UserState } from "../datatypes/User";
import { Project } from "../datatypes/Project";
import { DomSanitizer } from "@angular/platform-browser";

type taskOrProject = "task" | "project" | "both";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
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
    return (this.task ? "status-" + this.task.taskStatus : "") + (this.joined("task") ? " joined" : "");
  }

  constructor(@Inject(StoreService) private store: StoreService, @Inject(DomSanitizer) public sanitizer: DomSanitizer) {
    this.store.user$.subscribe(user => (this.userState = user));
  }

  /**
   * Delete and restore tasks
   */
  public delete() {
    const status = this.task.taskStatus;
    if (!this.joined("both") || status == "deleted") {
      this.store.newMessage(
        "error",
        "Can't update task's status",
        "This task can't be deleted. You have not been in the task's team or this task is already deleted.",
      );
      return false;
    }
    this.store.updateTaskStatus(this.task.projectId, this.task.taskId, "deleted");
  }

  public restore() {
    const status = this.task.taskStatus;
    if (!this.joined("both") || status != "deleted") {
      this.store.newMessage(
        "error",
        "Can't update task's status",
        "This task can't be restored. You have not been in the task's team or this task is not deleted.",
      );
      return false;
    }
    this.store.updateTaskStatus(this.task.projectId, this.task.taskId, "open");
  }

  ngOnInit() {}

  /**
   * toggleTaskStatus to done or open if it's not deleted and CurrentUser is joined to task and project
   */
  toggleTaskStatus(): void | boolean {
    const status = this.task.taskStatus;

    if (!this.joined("both") || status == "deleted") {
      this.store.newMessage(
        "error",
        "Can't update task's status",
        "You need to join the project and the task's team in order to update the task status",
      );
      return false;
    }

    if (status == "done") {
      this.store.updateTaskStatus(this.task.projectId, this.task.taskId, "open");
    } else if (status == "open") {
      this.store.updateTaskStatus(this.task.projectId, this.task.taskId, "done");
    }
  }

  /**
   * Function that adds the user to the ProjectTeam
   */
  join(): void {
    if (this.joined("project")) {
      this.store.joinTaskTeam(this.task.projectId, this.task.taskId, this.userState.userInformation.userId);
    }
  }
  /**
   * Function that deletes the user from the ProjectTeam
   */
  leave(): void {
    this.store.leaveTaskTeam(this.task.projectId, this.task.taskId, this.userState.userInformation.userId);
  }

  /**
   * Check if CurrentUser joined task, project, both or one of them.
   * @param ask 'task', 'project', 'both' or empty to check if joined one or the other
   */
  joined(ask?: taskOrProject): boolean {
    const joinedProject = Boolean(
      this.project.projectTeam.find(team => team.userId == this.userState.userInformation.userId),
    );
    const joinedTask = Boolean(
      this.task.taskTeam.find(taskTeam => taskTeam.userId == this.userState.userInformation.userId),
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

  svg(input) {
    return this.sanitizer.bypassSecurityTrustHtml(input);
  }

  imageString(input) {
    return String(input);
  }
}
