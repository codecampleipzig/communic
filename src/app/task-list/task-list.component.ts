import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../datatypes/Task';
import { Project } from '../datatypes/Project';

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {
  /**
   * Get project's object by parent component app-project-page
   */
  @Input() public project: Project;

  public tasks: Task[];

  constructor() { 
  }

  ngOnInit() {
    /**
     * Get Tasks from project Object
     */
    this.tasks = this.project.projectTasks;
  }

  ngOnInit() {}
}
