import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    WrapperComponent,
    CreateNewTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
