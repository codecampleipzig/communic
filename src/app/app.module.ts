import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProjectListComponent} from './project-list/project-list.component';
import { ProjectCardComponent} from './project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent, 
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
