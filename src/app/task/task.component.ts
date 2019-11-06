import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task = {
    id: 1,
    name: 'Some Task Name Placeholder'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
