import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { TaskListItemTeamComponent } from './task-list-item-team/task-list-item-team.component';
import { CreateNewTaskComponent } from './create-new-task/create-new-task.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProjectActionComponent } from './project-action/project-action.component';
import { UserActionComponent } from './user-action/user-action.component';
import { HomeComponent } from './home/home.component';
import { ProjectListComponent} from './project-list/project-list.component';
import { ProjectCardComponent} from './project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectPageComponent,
    TaskListComponent,
    TaskComponent,
    TaskListItemTeamComponent,
    CreateNewTaskComponent,
    TeamCardComponent,
    TeamMemberComponent,
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
