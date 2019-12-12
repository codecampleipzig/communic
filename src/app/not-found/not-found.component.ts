import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { StoreService } from "../store.service";

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.css"],
})
export class NotFoundComponent implements OnInit {
  public paths;
  constructor(@Inject(StoreService) public store: StoreService, @Inject(Router) public router: Router) {}

  ngOnInit() {
    this.store.retrieveExploreProjects();

    this.store.exploreProjects$.subscribe(projects => {
      const typoPath = this.router.url.replace("/", "");
      const threshold = this.getThreshold(typoPath);
      const routes = this.router.config;
      routes.push(
        ...projects.map(project => {
          return { path: "project/" + project.projectId, data: { title: project.projectTitle } };
        }),
      );

      const dictionary = routes.filter(
        route =>
          Math.abs(route.path.length - typoPath.length) < threshold &&
          route.path != "**" &&
          route.path != "project/:id",
      );

      if (dictionary.length && projects) {
        this.sortByDistances(typoPath, dictionary);
        this.paths = dictionary;
      }
    });
  }

  getThreshold(path: string): number {
    if (path.length < 5) {
      return 3;
    }
    return 5;
  }

  sortByDistances(typoPath: string, dictionary) {
    const pathsDistance = {} as { [name: string]: number };

    dictionary.sort((a, b) => {
      if (!(a.path in pathsDistance)) {
        pathsDistance[a.path] = this.levenshtein(a.path, typoPath);
      }
      if (!(b.path in pathsDistance)) {
        pathsDistance[b.path] = this.levenshtein(b.path, typoPath);
      }

      return pathsDistance[a.path] - pathsDistance[b.path];
    });
  }

  levenshtein(a: string, b: string): number {
    if (a.length == 0) {
      return b.length;
    }
    if (b.length == 0) {
      return a.length;
    }

    const matrix = [];

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) == a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1, // insertion
            matrix[i - 1][j] + 1, // deletion
          );
        }
      }
    }

    return matrix[b.length][a.length];
  }
}
