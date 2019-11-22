import { Component, OnInit, Input, HostBinding, Inject } from "@angular/core";
import { Task } from "../datatypes/Task";
import { StoreService } from '../store.service';
import { UserState } from '../datatypes/User';

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

  /**
   * Add Task Status as Class to the host Element
   * could be .status-open, .status-done, .status-deleted
   */
  @HostBinding("class")
  get hostClasses(): string {
    return (this.task ? "status-" + this.task.taskStatus : "") + (this.joined() ? " joined" : "");
  }

  constructor(@Inject(StoreService) private store: StoreService) {
    // Current user placeholder
    this.store.user.next({
      status: { loggedIn: true },
      userInformation: {
        userId: 2,
        userName: "Mariana",
        userEmail: "BringMarianaBananaToSchool@gmail.com",
        userImageURL: "../assets/user_avatar.png"
      }
    });
    this.store.user$.subscribe(user => this.userState = user);
  }

  ngOnInit() {}

  toggleStatus() {
    const status = this.task.taskStatus;

    if (!this.joined() || status == "deleted") {
      return false
    }

    if (status == "done") {
      this.store.updateTaskStatus(this.task.projectId, this.task.taskId, 'open')
    }
    else if (status == "open") {
      this.store.updateTaskStatus(this.task.projectId, this.task.taskId, 'done');
    }
    
  }

  joined() {
    if (this.task.taskTeam.find(taskTeam => taskTeam.userId == this.userState.userInformation.userId)) {
      return true
    }
    return false;
  }
}
