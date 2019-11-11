import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { Task } from '../dataTypes';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  private tasks: any[];

  constructor(private store: StoreService) { 
    this.tasks = this.store.TASKS;

  }

  ngOnInit() {
  }

}
