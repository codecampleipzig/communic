import { Component, Injectable, OnInit, Inject, ViewChild } from "@angular/core";
import { Project } from "./../datatypes/Project";
import { ProjectsService } from "./../projects.service";
import { projects } from "./../mockdata";
import { FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SearchService } from "./../search.service";
import { switchMap, map, debounceTime, distinctUntilChanged, mergeMap } from "rxjs/operators";

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
export class SearchtoolComponent implements OnInit {
  active = false;
  searchInput: FormControl = new FormControl("");
  projects: SearchProject[];

  constructor(
    @Inject(Router) private router: Router,
    @Inject(ActivatedRoute) private route: ActivatedRoute,
    @Inject(SearchService) private search: SearchService,
  ) { }

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(searchInput => this.search.getResults(searchInput))
      )
      .subscribe(results => (this.projects = results.projects));
  }

  onSubmit(event) {
    console.log(event);
    const searchString = this.searchInput.value;
    this.router.navigate(["/searchresults"], { queryParams: { searchString } });
    this.active = false;
  }

  focusLost() {
    setTimeout(() => {
      this.active = false;
    }, 200);
  }
  clearSearch() {
    this.searchInput.reset();
  }
}
