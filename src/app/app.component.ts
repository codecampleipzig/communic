import { Component } from '@angular/core';

export type EditorType = 'email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'communic';

  editor: EditorType = 'email';

  get showInputForm() {
    return this.editor === 'email';
  }

}
