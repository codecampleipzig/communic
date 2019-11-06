import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent {
  name = new FormControl ('');

  constructor() { }

  onSubmit() {
    console.log(this.name.value);
  }

  ngOnInit() {
  }

}
