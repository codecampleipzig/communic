import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../datatypes/Task';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-list-item-team',
  templateUrl: './task-list-item-team.component.html',
  styleUrls: ['./task-list-item-team.component.css']
})
export class TaskListItemTeamComponent implements OnInit {
  @Input() teamIDs: number;

  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
