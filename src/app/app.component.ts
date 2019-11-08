import { Component } from '@angular/core';

export type EditorType = 'name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Communic.io';

  editor: EditorType = 'name';

  get showInputForm() {
    return this.editor === 'name';
  }

}
