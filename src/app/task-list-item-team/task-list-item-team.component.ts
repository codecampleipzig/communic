import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../datatypes/Task';

@Component({
  selector: 'app-task-list-item-team',
  templateUrl: './task-list-item-team.component.html',
  styleUrls: ['./task-list-item-team.component.css']
})
export class TaskListItemTeamComponent implements OnInit {
  @Input() task: Task;

  /* Placeholder. Needs to be replaced with something like task.userIDs.find(currentUser) */
  private userjoined: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.task);
  }

  /**
   * Join Task function
   * - [ ] Check wheter User has already joined currentProject.userIDs
   * - [ ] Add current User to task.userIDs
   */
  private joinTask() : void {
    /* Placeholder. Needs to be replaced with something like task.userIDs.find(currentUser) */
    this.userjoined = true;
    console.log("User joined");
  }

  private leaveTask() : void {
    /* Placeholder. Needs to be replaced with something like task.userIDs.find(currentUser) */
    this.userjoined = false;
    console.log("User leaved");
  }

}
