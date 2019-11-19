import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Task } from '../datatypes/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public tasks: Task[]; 

  constructor(private store: StoreService) { 
    /**
     * Pass Tasks of Project 9435/starter
     */
    this.tasks = this.store.retrieveTasks(9435, 'starter');
  }

  ngOnInit() {
  }

}
