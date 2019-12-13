import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ProjectPageComponent } from "./project-page/project-page.component";
import { TaskComponent } from "./task/task.component";
import { CreateNewTaskComponent } from "./create-new-task/create-new-task.component";
import { TeamCardComponent } from "./team-card/team-card.component";
import { TeamMemberComponent } from "./team-member/team-member.component";
import { ProjectTeaserComponent } from "./project-teaser/project-teaser.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ProjectActionComponent } from "./project-action/project-action.component";
import { UserActionComponent } from "./user-action/user-action.component";
import { HomeComponent } from "./home/home.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { AppRoutingModule } from "./app-routing.module";
import { RegisterCardComponent } from "./register-card/register-card.component";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { RouterModule } from "@angular/router";
import { SearchtoolComponent } from "./searchtool/searchtool.component";
import { IconComponent } from "./icon/icon.component";
import { SearchresultsComponent } from "./searchresults/searchresults.component";
import { HttpClientModule } from "@angular/common/http";
import { ProjectSectionsComponent } from "./project-sections/project-sections.component";
import { CreateSectionComponent } from "./create-section/create-section.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { MessageComponent } from "./message/message.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoadingIconComponent } from "./loading-icon/loading-icon.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

@NgModule({
  declarations: [
    AppComponent,
    ProjectPageComponent,
    TaskComponent,
    CreateNewTaskComponent,
    TeamCardComponent,
    TeamMemberComponent,
    ProjectTeaserComponent,
    ToolbarComponent,
    ProjectActionComponent,
    UserActionComponent,
    HomeComponent,
    ProjectListComponent,
    ProjectCardComponent,
    RegisterCardComponent,
    SearchtoolComponent,
    IconComponent,
    SearchresultsComponent,
    CreateProjectComponent,
    ProjectSectionsComponent,
    CreateSectionComponent,
    LandingpageComponent,
    MessageComponent,
    NotFoundComponent,
    LoadingIconComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
