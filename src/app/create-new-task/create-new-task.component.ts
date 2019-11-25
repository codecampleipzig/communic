import { Component, OnInit, HostBinding, NgModule } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormBuilder } from "@angular/forms"; 
import { Task } from "../datatypes/Task";
import { User } from "../datatypes/User";


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

  constructor(fb: FormBuilder) {
    this.newTaskForm = fb.group({
      'title': [''],
      'description': ['']
    })
  }

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

  users: User[] = [
    {
      userId: 1,
      userName: "Mautzi",
      userEmail: "MolleMorallo@gmail.com",
      userImageURL: "../assets/user_avatar.png"
    }];

  onSubmit(value: any): void {
    console.log ("NEW TASK!", value);
    this.closeForm();
  }

  ngOnInit() {}
}
