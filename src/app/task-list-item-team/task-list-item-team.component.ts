import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-item-team',
  templateUrl: './task-list-item-team.component.html',
  styleUrls: ['./task-list-item-team.component.css']
})
export class TaskListItemTeamComponent implements OnInit {
  @Input() teamIDs: number;
  @Input() status: string;

  userjoined: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  private JoinTask() : void {
    this.userjoined = true;
    console.log("User joined");
  }

  private LeaveTask() : void {
    this.userjoined = false;
    console.log("User leaved");
  }

}
