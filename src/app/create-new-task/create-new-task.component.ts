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
  @Input() public currentUser: User;
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

  onSubmit(value: any): void {
    if (value.title == '' || value.description == '') {
      return null;
    };
    const newTask: Task = 
    {
      /**
       * Creates a newTask object of type Task using title and description from form, projectId and current user
       */
      taskId: 1,
      projectId: this.project.projectId,
      taskTitle: value.title,
      taskDescription: value.description,
      taskStatus: "open",
      taskCreator: this.currentUser,
      taskTeam: [this.currentUser],
      menuSection: "starter"
    };
    /**
     * Pushes newTask to projectTasks and closes the form
     */
    this.project.projectTasks.push(newTask);
    console.log (newTask);
    this.closeForm();
  }

  ngOnInit() {}
}
