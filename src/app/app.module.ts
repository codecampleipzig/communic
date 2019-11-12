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
import { ProjectTeaserComponent } from './project-teaser/project-teaser.component';

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
    ProjectTeaserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
