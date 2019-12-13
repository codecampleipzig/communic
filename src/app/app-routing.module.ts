import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectPageComponent } from "./project-page/project-page.component";
import { HomeComponent } from "./home/home.component";
import { RegisterCardComponent } from "./register-card/register-card.component";
import { SearchresultsComponent } from "./searchresults/searchresults.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { AuthGuardService } from "./auth-guard.service";
import { CreateProjectComponent } from "./create-project/create-project.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "project/:id", component: ProjectPageComponent, canActivate: [AuthGuardService] },
  { path: "home", component: HomeComponent, data: { title: "Home" }, canActivate: [AuthGuardService] },
  { path: "", redirectTo: "register", pathMatch: "full" },
  { path: "register", component: LandingpageComponent, data: { title: "Register" } },
  { path: "login", component: LandingpageComponent, data: { title: "Login" } },
  {
    path: "searchresults",
    component: SearchresultsComponent,
    data: { title: "Search Results" },
    canActivate: [AuthGuardService],
  },
  {
    path: "createproject",
    component: CreateProjectComponent,
    data: { title: "Create New Project" },
    canActivate: [AuthGuardService],
  },
  {
    path: "**",
    component: NotFoundComponent,
    data: { title: "Page not Found" },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
