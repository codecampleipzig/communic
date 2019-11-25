import { Component, OnInit, HostBinding, NgModule } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormBuilder } from "@angular/forms"; 


@NgModule({
  imports: [
    ReactiveFormsModule,
    FormGroup,
    FormBuilder
  ]
})

@Component({
  selector: "app-create-new-task",
  templateUrl: "./create-new-task.component.html",
  styleUrls: ["./create-new-task.component.css"]
})
export class CreateNewTaskComponent implements OnInit {
  private formVisible: any = false;
  newTaskForm: FormGroup;

  /**
   * Add Task .card Class to :host Element
   */
  @HostBinding("class")
  get hostClasses(): string {
    return "card display-flex";
  }

  constructor() {}

  /**
   * Create a function for opening and closing a form to bind to objects in the HTML.
   */
  openForm() {
    if (!this.formVisible == true) {
      this.formVisible = true;
    } else {
      return;
    }
  }

  closeForm() {
    if (this.formVisible == true) {
      this.formVisible = false;
    } else {
      return; 
    }
  }

  onSubmit(form: any): void {
    console.log ("NEW TASK!", form)
  }

  ngOnInit() {}
}
