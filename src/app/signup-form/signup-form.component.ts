import { Component, NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { StoreService } from '../store.service';


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
  
  constructor(private store: StoreService) { 
    this.profileForm = new FormGroup({
    name: new FormControl ('',[Validators.required]),
    email: new FormControl ('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
  }); 
  }

  onSubmit() {
    const {name, email, password} = this.profileForm.value;

    this.store.register (name, email, password);
  }

  ngOnInit() {
  }

}

