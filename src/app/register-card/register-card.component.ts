import { FormControl, ReactiveFormsModule, Validators, FormGroup } from "@angular/forms";
import { Component, OnInit, NgModule, Inject, HostBinding } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StoreService } from "../store.service";
import { FileUploadService } from "../file-upload.service";
import { v4 as uuid } from "uuid";

@NgModule({
  imports: [ReactiveFormsModule],
})
@Component({
  selector: "app-register-card",
  templateUrl: "./register-card.component.html",
  styleUrls: ["./register-card.component.css"],
})
export class RegisterCardComponent implements OnInit {
  profileForm: FormGroup;
  title: string;
  image: any = null;
  authType: any;
  uploadState: string | boolean = false;
  fileToUpload: File = null;

  /**
   * Add .container Class to the Host
   */
  @HostBinding("class")
  get hostClasses(): string {
    return "container";
  }

  constructor(
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(Router) private router: Router,
    @Inject(StoreService) private store: StoreService,
    @Inject(FileUploadService) private uploader: FileUploadService,
  ) {
    this.profileForm = new FormGroup({
      image: new FormControl("<svg>"),
      userName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"), // this is for the letters (both uppercase and lowercase) and numbers validation
        ]),
      ),
    });
  }

  get userNameField() {
    return this.profileForm.get("userName");
  }

  get emailField() {
    return this.profileForm.get("email");
  }

  get passwordField() {
    return this.profileForm.get("password");
  }

  get imageField() {
    return this.profileForm.get("image");
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
    });
  }

  onSubmit() {
    if (this.authType == "register") {
      this.store.register(
        this.userNameField.value,
        this.emailField.value,
        this.passwordField.value,
        this.imageField.value,
      );
    } else if (this.authType == "login") {
      this.store.login(this.emailField.value, this.passwordField.value);
    } else if (this.authType == "reset-password") {
      this.store.resetPassword(this.emailField.value);
    } else if (this.authType == "change-password") {
      this.store.changePassword(this.passwordField.value);
    }
  }

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
      const filename = "userpicture/" + uuid() + "." + this.fileToUpload.name.split(".").pop();

      this.uploader.uploadFile(this.fileToUpload, filename).then(
        data => {
          this.image = data.config.url.split("?")[0];
          this.fileToUpload = null;

          this.store.newMessage("confirm", "Upload successful", "You look great!");
          this.uploadState = false;

          event.target.innerHTML = "Upload Image";
          this.profileForm.get("image").setValue(this.image);
        },
        error => {
          console.log(error);
        },
      );
    }
  }

  isString(val) {
    return typeof val === "string";
  }
}
