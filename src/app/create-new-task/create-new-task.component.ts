import { Component, OnInit, HostBinding, NgModule, Input, Inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Task } from "../datatypes/Task";
import { User, UserState } from "../datatypes/User";
import { Project } from "../datatypes/Project";
import { StoreService } from "../store.service";

@NgModule({
  imports: [
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
  @Input() public project: Project;
  public userState: UserState;
  public tasks: Task[] = [];
  public team: User[];

  /**
   * Add Task .card Class to :host Element
   */
  @HostBinding("class")
  get hostClasses(): string {
    return "card display-flex";
  }

  constructor(@Inject(StoreService) private store: StoreService) {
    this.store.user$.subscribe(user => (this.userState = user));
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
    if (value.title == "" || value.description == "") {
      return null;
    }
    const newTask: Task = {
      /**
       * Creates a newTask object of type Task using title and description from form, projectId and current user
       */
      taskId: 1,
      projectId: this.project.projectId,
      taskTitle: value.title,
      taskDescription: value.description,
      taskStatus: "open",
      taskCreator: this.userState.userInformation,
      taskTeam: [this.userState.userInformation],
      menuSection: "starter"
    };
    /**
     * Pushes newTask to projectTasks and closes the form
     */
    this.project.projectTasks.push(newTask);
    console.log (newTask);
    this.closeForm();
  }

   /**
   * Check if userState is part of the project
   */
  joined(): boolean {
    return Boolean(
      this.team.find(
        team => team.userId == this.userState.userInformation.userId
      )
    );
  }

  ngOnInit() {
    this.team = this.project.projectTeam;
  }
}
