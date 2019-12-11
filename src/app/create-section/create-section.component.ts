import { Component, OnInit, Input, Inject, NgModule } from "@angular/core";
import { Project } from "../datatypes/Project";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { StoreService } from "../store.service";
import { UserState } from "../datatypes/User";

@Component({
  selector: "app-create-section",
  templateUrl: "./create-section.component.html",
  styleUrls: ["./create-section.component.css"],
})
export class CreateSectionComponent implements OnInit {
  public userState: UserState;
  public sectionForm: FormGroup;
  public toggleForm = false;
  public showErrors = false;
  public firstSection = false;
  @Input() public project: Project;

  constructor(@Inject(StoreService) private store: StoreService) {
    store.user$.subscribe(user => (this.userState = user));
    store.status$.subscribe(s => (this.toggleForm = s.sectionCreationPending));
  }

  ngOnInit() {
    this.sectionForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required, Validators.minLength(40)]),
    });
    this.firstSection = this.project.projectSections.length == 0;
  }

  get title() {
    return this.sectionForm.get("title");
  }
  get description() {
    return this.sectionForm.get("description");
  }

  onSubmit() {
    if (this.sectionForm.valid) {
      this.showErrors = false;
      // Due Date is now + two Weeks!
      this.store.createNewSection(
        this.project.projectId,
        this.title.value,
        this.description.value,
        new Date(Date.now() + 12096e5),
        "open",
        this.userState.userInformation.userId,
      );
    } else {
      this.showErrors = true;
    }
  }

  toggle() {
    if (this.toggleForm) {
      const r = confirm("Do you really want to cancel? Everything unsaved will be lost!");
      if (r) {
        this.store.updateStatus({ sectionCreationPending: false });
      } else {
        return;
      }
    } else {
      this.store.updateStatus({ sectionCreationPending: true });
    }
  }
}
