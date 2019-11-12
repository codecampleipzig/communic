import { Component, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { RegisterCardComponent } from '../register-card/register-card.component'


@NgModule({
  imports: [  
    ReactiveFormsModule,
    RegisterCardComponent
  ]
})

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {

  profileForm = new FormGroup({
    name: new FormControl ('',[Validators.required]),
    email: new FormControl ('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  }); 

  constructor() { }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  ngOnInit() {
  }

}
