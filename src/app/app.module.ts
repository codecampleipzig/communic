import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrashAlt, faTrashRestore, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WrapperComponent } from './wrapper/wrapper.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemTeamComponent } from './task-list-item-team/task-list-item-team.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    TaskComponent,
    TaskListComponent,
    TaskListItemTeamComponent,
    CreateNewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faTrashRestore, faTrashAlt, faPlus, faTimes);
  }
}
