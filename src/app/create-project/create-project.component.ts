import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { StoreService } from "../store.service";
import { UserState } from "../datatypes/User";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FileUploadService } from "../file-upload.service";
import { v4 as uuid } from "uuid";

@Component({
  selector: "app-create-project",
  templateUrl: "./create-project.component.html",
  styleUrls: ["./create-project.component.css"],
})
export class CreateProjectComponent implements OnInit {
  public userState: UserState;
  public projectForm: FormGroup;
  public showErrors = false;

  public message: string;

  image: any = null;
  uploadState: string | boolean = false;
  fileToUpload: File = null;

  constructor(
    @Inject(Router) private router: Router,
    @Inject(StoreService) private store: StoreService,
    @Inject(FileUploadService) private uploader: FileUploadService,
  ) {
    store.user$.subscribe(user => (this.userState = user));
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
        this.image,
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
    this.router.navigate(["/home"]);
  }

  /**
   * function to select and upload an image
   */
  onSelectFile(event) {
    const eventTarget: any = event.target;
    this.fileToUpload = null;
    if (eventTarget.files && eventTarget.files[0]) {
      this.fileToUpload = eventTarget.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        // called once readAsDataURL is completed
        this.image = (e.target as any).result;
      };

      reader.readAsDataURL(eventTarget.files[0]); // read file as data url
    }
  }

  uploadFile(event) {
    if (!this.fileToUpload) {
      this.store.newMessage("error", "No file to upload", "You need to choose a file to upload");
    } else if (this.uploadState == false && this.fileToUpload) {
      this.uploadState = "pending";
      event.target.innerHTML = "Uploading...";
      const filename = "projectpicture/" + uuid() + "." + this.fileToUpload.name.split(".").pop();

      this.uploader.uploadFile(this.fileToUpload, filename).then(
        response => {
          this.image = "https://testpicturestorage.s3.eu-central-1.amazonaws.com/" + filename;

          this.fileToUpload = null;

          this.store.newMessage("confirm", "Upload successful", "This looks great!");
          this.uploadState = false;

          event.target.innerHTML = "Upload Image";
        },
        error => {
          this.store.newMessage("error", "File upload failed", "Something should be different", 3000);
          console.log(error);
        },
      );
    }
  }

  isString(val) {
    return typeof val === "string";
  }
}
