import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectPageComponent } from './project-page/project-page.component';
import { HomeComponent } from './home/home.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { UserActionComponent } from './user-action/user-action.component';

const routes: Routes = [
  {path: 'project/:id', component: ProjectPageComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: RegisterCardComponent},
  {path: 'login', component: UserActionComponent},
  {path: 'logout', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
