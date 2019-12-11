import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectPageComponent } from "./project-page/project-page.component";
import { HomeComponent } from "./home/home.component";
import { RegisterCardComponent } from "./register-card/register-card.component";
import { SearchresultsComponent } from "./searchresults/searchresults.component";
import { StartnewprojectComponent } from "./startnewproject/startnewproject.component";
import { AuthGuardService } from "./auth-guard.service";

const routes: Routes = [
  { path: "project/:id", component: ProjectPageComponent, canActivate: [AuthGuardService] },
  { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
  { path: "", redirectTo: "register", pathMatch: "full" },
  { path: "register", component: RegisterCardComponent },
  { path: "login", component: RegisterCardComponent },
  { path: "reset-password", component: RegisterCardComponent },
  { path: "change-password", component: RegisterCardComponent },
  { path: "searchresults", component: SearchresultsComponent, canActivate: [AuthGuardService] },
  { path: "startnewproject", component: StartnewprojectComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
