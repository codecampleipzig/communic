import { Component, OnInit, HostBinding, NgModule, Input, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Task } from "../datatypes/Task";
import { UserState } from "../datatypes/User";
import { Project } from "../datatypes/Project";
import { StoreService } from "../store.service";

@NgModule({
  imports: [FormBuilder],
})
@Component({
  selector: "app-create-new-task",
  templateUrl: "./create-new-task.component.html",
  styleUrls: ["./create-new-task.component.css"],
})
export class CreateNewTaskComponent implements OnInit {
  public formVisible: any = false;
  @Input() public project: Project;
  @Input() public sectionId: number;
  public userState: UserState;
  public tasks: Task[] = [];
  public sectionForm: FormGroup;

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

  /**
 * Function that craetes a new task object and closes form 
 */

  onSubmit(value: any): void {
    if (value.title == "" || value.description == "") {
      return null;
    }

    this.store.createTask(
      this.project.projectId,
      this.title.value,
      this.description.value,
      "open",
      this.userState.userInformation.userId,
      this.sectionId)

    this.closeForm();
  }

  ngOnInit() {
    this.sectionForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required, Validators.minLength(40)]),
    });
  }

  get title() {
    return this.sectionForm.get("title");
  }
  get description() {
    return this.sectionForm.get("description");
  }
}
