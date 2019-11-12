import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { TaskListItemTeamComponent } from './task-list-item-team/task-list-item-team.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    TaskListComponent,
    TaskComponent,
    TaskListItemTeamComponent,
    CreateNewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
