import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { StoreService } from "../store.service";
import { Project } from "../datatypes/Project";
import { UserState } from "../datatypes/User";

@Component({
  selector: "app-project-page",
  templateUrl: "./project-page.component.html",
  styleUrls: ["./project-page.component.css"],
})
export class ProjectPageComponent implements OnInit, OnDestroy {
  public userState: UserState;
  public project: Project | null = null;

  constructor(@Inject(ActivatedRoute) public route: ActivatedRoute, @Inject(StoreService) private store: StoreService) {
    /**
     * Subscribe to id param in the ActivatedRoute
     * and get project's object from store.service
     */
    this.store.project$.subscribe(project => (this.project = project));
    route.params.subscribe((params: Params) => {
      this.store.retrieveProject(params.id);
    });

    this.store.user$.subscribe(user => (this.userState = user));
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.store.unloadProject();
  }

  /**
   * Check if userState is part of the project
   */
  joined(): boolean {
    return Boolean(this.project.projectTeam.find(team => team.userId == this.userState.userInformation.userId));
  }
}
