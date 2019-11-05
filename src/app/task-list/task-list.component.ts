import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  private taskList = [
    {
      taskName: "Task Name Placeholder",
      taskID: "00001",
      taskAuthor: "John Doe",
      taskTeam: [ "00001", "00002", "00005", "00006"]
    },
    {

    }
  ]
  private taskName = "Some Task Name Placeholder";
  
  constructor() { }

  ngOnInit() {
  }

}
