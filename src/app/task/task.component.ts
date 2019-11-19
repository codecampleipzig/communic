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
   */
  @HostBinding('class')
    get hostClasses(): string { return this.task ? 'status-' + this.task.taskStatus : ''; }

  constructor() {}

  ngOnInit() {}
}
