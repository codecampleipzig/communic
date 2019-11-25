import { Component, OnInit, HostBinding, NgModule, Input } from "@angular/core";
import { ReactiveFormsModule, FormGroup, FormBuilder } from "@angular/forms"; 
import { Task } from "../datatypes/Task";
import { User } from "../datatypes/User";
import { Project } from "../datatypes/Project";

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
  @Input() public project: Project;

  public tasks: Task[] = [];

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

  /**
   * Mock user for use in new task - this should be imported
   */
  users: User[] = [
    {
      userId: 1,
      userName: "Mautzi",
      userEmail: "MolleMorallo@gmail.com",
      userImageURL: "../assets/user_avatar.png"
    }];

  onSubmit(value: any): void {
    const newTask: Task = 
    {
      /**
       * All values apart from taskTitle, taskDescription and taskStatus are placeholders
       */
      taskId: 1,
      projectId: this.project.projectId,
      taskTitle: value.title,
      taskDescription: value.description,
      taskStatus: "open",
      taskCreator: this.users[0],
      taskTeam: [],
      menuSection: "starter"
    };
    console.log ("New task!", newTask);
    this.project.projectTasks.push(newTask);
    this.closeForm();
  }

  ngOnInit() {}
}
