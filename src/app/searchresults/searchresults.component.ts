import { Component, OnInit, Input, Inject } from "@angular/core";
import { User } from "./../datatypes/User";
import { Project } from "./../datatypes/Project";
import { ProjectCategoryEnum } from "./../datatypes/enums/ProjectCategoryEnum";
import { SearchService, SearchResult } from "../search.service";
import { ActivatedRoute } from "@angular/router";

interface LoadingState {
  type: "loading";
}
interface ErrorState {
  type: "error";
  error: unknown;
}
interface SuccessState {
  type: "success";
  result: SearchResult;
}
interface InvalidState {
  type: "invalid";
}

type ComponentState = LoadingState | ErrorState | SuccessState | InvalidState;

@Component({
  selector: "app-searchresults",
  templateUrl: "./searchresults.component.html",
  styleUrls: ["./searchresults.component.css"],
})
export class SearchresultsComponent implements OnInit {
  state: ComponentState = { type: "loading" };
  searchString = "...";

  constructor(
    @Inject(SearchService) public search: SearchService,
    @Inject(ActivatedRoute) public route: ActivatedRoute,
  ) {
    this.route.queryParams.subscribe(() => this.ngOnInit());
  }

  get searchResults(): SearchResult {
    return (this.state as SuccessState).result;
  }

  ngOnInit() {
    this.searchString = this.route.snapshot.queryParams.searchString;
    if (this.searchString) {
      this.search.getResults(this.searchString)
        .subscribe(
          // .then(
          result => (this.state = { type: "success", result }),
          error => (this.state = { type: "error", error }),
        );
    } else {
      this.state = { type: "invalid" };
    }
  }
}
