import { Component, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { passwordValidation } from "../passwordvalidator";


@NgModule({
  imports: [  
    ReactiveFormsModule,
  ]
})

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent {
  profileForm: FormGroup;
  

  constructor() { 
    this.profileForm = new FormGroup({
    name: new FormControl ('',[Validators.required]),
    email: new FormControl ('',Validators.compose([
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')

    ])),
    password: new FormControl('',Validators.compose([
      Validators.minLength(8),
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
   ])),
  }); 
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }

  ngOnInit() {
  }

}

