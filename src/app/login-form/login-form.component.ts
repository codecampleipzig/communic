import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

@NgModule({
  imports: [
    MatInputModule
  ]
})

export class InputFormComponent {
  email = new FormControl ('', [Validators.required, Validators.email]);

  getErrorMessage (){
    return this.email.hasError('required') ? 'Email required':
      this.email.hasError('email') ? 'Enter a valid email':
      '';
  }

  constructor() { }

  onSubmit() {
  }

  ngOnInit() {
  }

}
