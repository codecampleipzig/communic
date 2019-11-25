import { Component, OnInit, NgModule, Inject, HostBinding, ViewEncapsulation } from "@angular/core";
import {
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormGroup
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Route } from '@angular/compiler/src/core';

@NgModule({
  imports: [ReactiveFormsModule]
})
@Component({
  selector: "app-register-card",
  templateUrl: "./register-card.component.html",
  styleUrls: ["./register-card.component.css"]
})
export class RegisterCardComponent implements OnInit {
  profileForm: FormGroup;
  authType: string;
  title: string;

  /**
   * Add .container Class to the Host
   */
  @HostBinding("class")
  get hostClasses(): string { return "container background"; }

  constructor(private route: ActivatedRoute, @Inject(Router) private router: Router) {
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

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = this.authType === "login" ? "Sign in" : "Sign up";
      // add form control for username if this is the register page
      if (this.authType === "register") {
        this.profileForm.addControl("name", new FormControl());
      }
    });
  }

  onSubmit() {
    this.router.navigate(["home"]);
  }
}
