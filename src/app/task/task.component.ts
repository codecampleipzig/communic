import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Task } from '../datatypes/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  
  @HostBinding('class')
    get hostClasses(): string {
      return [
        'status-' + this.task.status
      ].join('');
    }

  constructor() { 
  }

  ngOnInit() {

  }

}
