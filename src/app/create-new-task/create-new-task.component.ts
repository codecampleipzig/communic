import { Component, OnInit, HostBinding} from '@angular/core';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css'],
  host: {
    "(click)": "toggleForm()"
  }
})
export class CreateNewTaskComponent implements OnInit {
  private formVisible : any = false;

  /**
   * Add Task .card Class to :host Element
   */
  @HostBinding('class')
    get hostClasses(): string { return 'card displayFlex'; }
  
  constructor() { }

  toggleForm() {
    if (this.formVisible == true ) {
      this.formVisible = false;
    } else {
      this.formVisible = true;
    }
  }

  ngOnInit() {
  }

}