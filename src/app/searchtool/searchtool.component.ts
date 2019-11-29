import { Component, Injectable, OnInit } from "@angular/core";
import { Project } from "./../datatypes/Project";
import { ProjectsService } from "./../projects.service";
import { projects } from "./../mockdata";
import { FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { SearchService } from './../search.service';
import { switchMap, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

  constructor(private router: Router, private route: ActivatedRoute, private search: SearchService) { }

  ngOnInit() {
    this.searchInput.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(searchInput => this.search.getResults(searchInput))
      )
      .subscribe(projects => this.projects = projects.projects);
  }

  onSubmit() {
    const searchString = this.searchInput.value;
    this.router.navigate(["/searchresults"], { queryParams: { searchString: searchString } });
  }
}
