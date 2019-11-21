import { Component, NgModule } from "@angular/core";
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup
} from "@angular/forms";

@NgModule({
  imports: [ReactiveFormsModule]
})
@Component({
  selector: "app-signup-form",
  templateUrl: "./signup-form.component.html",
  styleUrls: ["./signup-form.component.css"]
})
export class SignupFormComponent {
  profileForm: FormGroup;

  constructor() {
    this.profileForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
          ) // this is for the letters (both uppercase and lowercase) and numbers validation
        ])
      )
    });
  }

  get name() {
    return this.profileForm.get("name");
  }

  get email() {
    return this.profileForm.get("email");
  }

  get password() {
    return this.profileForm.get("password");
  }
}
