import { Component, OnInit, Inject } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { StoreService } from "../store.service";
import { UserState } from "../datatypes/User";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.css"],
})
export class CreateProjectComponent implements OnInit {
  public userState: UserState;
  public projectForm: FormGroup;
  public showErrors = false;
  public projectTitle = "";

  public imagePath: string;
  public imgURL: any;
  public message: string;

  /**
   * Preview uploaded files
   */
  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return this.message;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = event => {
      this.imgURL = reader.result;
    };
  }

  constructor(@Inject(Router) private router: Router, @Inject(StoreService) private store: StoreService) {
    store.user$.subscribe(user => (this.userState = user));
    this.store.toolbar.next(this.projectTitle);
  }

  ngOnInit() {
    this.projectForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      // imageUrl: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required, Validators.minLength(40)]),
      goal: new FormControl("", [Validators.required, Validators.minLength(40)]),
    });
  }

  get title() {
    return this.projectForm.get("title");
  }
  // get imageUrl() {
  //   return this.projectForm.get("imageUrl");
  // }
  get description() {
    return this.projectForm.get("description");
  }
  get goal() {
    return this.projectForm.get("goal");
  }

  onSubmit() {
    if (this.projectForm.valid) {
      this.showErrors = false;

      this.store.createNewProject(
        this.title.value,
        "somestring",
        this.description.value,
        this.goal.value,
        this.userState.userInformation.userId,
      );
    } else {
      this.showErrors = true;
    }
  }

  /**
   * if create project is cancelled via clicking delete button
   * the user will be directed back to the home page
   */
  navigateHome() {
    this.router.navigate(["home"]);
  }

  /**
   * function to select and upload an image
   */
  onSelectFile(event) {
    const eventTarget: any = event.target;
    if (eventTarget.files && eventTarget.files[0]) {
      const reader = new FileReader();

      reader.onload = e => {
        // called once readAsDataURL is completed
        this.imgURL = (e.target as any).result;
      };

      reader.readAsDataURL(eventTarget.files[0]); // read file as data url
    }
  }
}
