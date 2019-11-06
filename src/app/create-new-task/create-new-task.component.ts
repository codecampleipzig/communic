import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})
export class CreateNewTaskComponent implements OnInit {
  private formVisible = false;
  
  constructor() { }

  onClickPlus() {
    this.formVisible = true;
  }
  onClickAbort() {
    this.formVisible = false;
  }

  ngOnInit() {
  }

}