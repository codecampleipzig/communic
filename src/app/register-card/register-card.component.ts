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
      userName: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[^\\d\\s](\\S+ ){0,1}\\S+$"),
          // this is for username validation on registration - no whitespace at the beginning and end, at least two characters and at most two words
        ]),
      ),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          // Validators.email
          Validators.pattern(
            `^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$`,
          ),
        ]),
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          // Old password validator: ("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"), // this is for the letters (both uppercase and lowercase) and numbers validation
          // Validators.pattern(^(?=.*[A-Za-z])(?=.*\\d)[\\S]{8,}$) // Version 2: this is for password validation on registration - at least 8 characters, letters and at least one number. Special characters are allowed.
          Validators.pattern("^(?=(.*[A-Za-z]){1,})(?=(.*[\\d]){1,})(?!.*\\s).{8,}$"), // Version 1: this is for password validation on registration - at least 8 characters, letters and at least one number. Special characters are allowed.
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

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
    });
  }

  onSubmit() {
    if (this.authType == "register") {
      this.store.register(this.userNameField.value, this.emailField.value, this.passwordField.value, this.image);
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
        response => {
          this.image = "https://testpicturestorage.s3.eu-central-1.amazonaws.com/" + filename;

          this.fileToUpload = null;

          this.store.newMessage("confirm", "Upload successful", "You look great!");
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
