import { Component, OnInit, Input } from "@angular/core";
import { Task } from "../datatypes/Task";

@Component({
  selector: "app-task-team",
  templateUrl: "./task-team.component.html",
  styleUrls: ["./task-team.component.css"]
})
export class TaskTeamComponent implements OnInit {
  @Input() task: Task;

  /* Placeholder. Needs to be replaced with something like task.userIDs.find(currentUser) */
  userjoined = false;

  constructor() {}

  ngOnInit() {}

  /**
   * Join Task function
   * - [ ] Check wheter User has already joined currentProject.userIDs
   * - [ ] Add current User to task.userIDs
   */
  joinTask(): void {
    /* Placeholder. Needs to be replaced with something like task.userIDs.find(currentUser) */
    this.userjoined = true;
    console.log("User joined");
  }

  leaveTask(): void {
    /* Placeholder. Needs to be replaced with something like task.userIDs.find(currentUser) */
    this.userjoined = false;
    console.log("User left");
  }
}
