import { FormControl, ReactiveFormsModule, Validators, FormGroup } from "@angular/forms";
import { Component, OnInit, NgModule, Inject, HostBinding } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StoreService } from "../store.service";

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
  url: any = null;
  authType: any;

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
  ) {
    this.profileForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
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
    });
  }

  onSubmit() {
    if (this.authType == "register") {
      this.store.register(this.name.value, this.email.value, this.password.value);
    } else if (this.authType == "login") {
      this.store.login(this.email.value, this.password.value);
    } else if (this.authType == "reset-password") {
      this.store.resetPassword(this.email.value);
    } else if (this.authType == "change-password") {
      this.store.changePassword(this.password.value);
    }
  }

  onSelectFile(event) {
    const eventTarget: any = event.target;
    if (eventTarget.files && eventTarget.files[0]) {
      const reader = new FileReader();

      reader.onload = e => {
        // called once readAsDataURL is completed
        this.url = (e.target as any).result;
      };

      reader.readAsDataURL(eventTarget.files[0]); // read file as data url
    }
  }
}
