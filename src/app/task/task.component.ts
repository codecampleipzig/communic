import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { Task } from "../datatypes/Task";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  /**
   * Import task object
   */
  @Input() task: Task;

  /**
   * Add Task Status as Class to the host Element
   * could be .status-open, .status-done, .status-deleted
   * 
   * Add joined Class to the host Element to enable CSS hover/focus Interactions
   * - [ ] #102 Add Joined Class based on if user is in the team.
   */
  @HostBinding("class")
  get hostClasses(): string {
    return this.task ? "joined status-" + this.task.taskStatus : "";
  }

  constructor() {}

  ngOnInit() {}
}
