import { Component, Injectable } from "@angular/core";
import { Project } from "communic/src/app/datatypes/Project";
import { ProjectsService } from "communic/src/app/projects.service";
import { projects } from "communic/src/app/mockdata";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

// technical debt, because the real Project type is outdated
export interface SearchProject {
  projectId: number;
  projectTitle: string;
}

@Component({
  selector: "app-searchtool",
  templateUrl: "./searchtool.component.html",
  styleUrls: ["./searchtool.component.css"],
})
@Injectable({
  providedIn: Router,
})
export class SearchtoolComponent {
  active = false;
  searchInput = new FormControl("");

  projects: SearchProject[] = [];
  constructor(public route: Router) {}

  onSubmit() {
    const searchString = this.searchInput.value;
    this.route.navigate(["/searchresults"], { queryParams: searchString.value });
    // dependency injection for the router
    // Get query parameters from input
    // router.navigate([newUrl])
  }
}
