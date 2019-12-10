import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectPageComponent } from "./project-page/project-page.component";
import { HomeComponent } from "./home/home.component";
import { RegisterCardComponent } from "./register-card/register-card.component";
import { SearchresultsComponent } from "./searchresults/searchresults.component";
import { CreateProjectComponent } from "./create-project/create-project.component";

const routes: Routes = [
  { path: "project/:id", component: ProjectPageComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "register", pathMatch: "full" },
  { path: "register", component: RegisterCardComponent },
  { path: "login", component: RegisterCardComponent },
  { path: "searchresults", component: SearchresultsComponent },
  { path: "createproject", component: CreateProjectComponent },
  { path: "login", component: RegisterCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
