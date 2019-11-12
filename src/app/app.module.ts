import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProjectActionComponent } from './project-action/project-action.component';
import { UserActionComponent } from './user-action/user-action.component';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent} from './project-list/project-list.component';
import { ProjectCardComponent} from './project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProjectActionComponent,
    UserActionComponent,
    HomeComponent,
    ProjectListComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
