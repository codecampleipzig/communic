import { Component, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
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
  name = new FormControl ('',[Validators.required]);
  email = new FormControl ('',[Validators.required, Validators.email]);
  

  constructor() { }

  onSubmit() {
  }

  ngOnInit() {
  }

}
