import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  name = new FormControl ('');

  constructor() { }

  onSubmit() {
    console.log(this.name.value);
  }

  ngOnInit() {
  }

}
