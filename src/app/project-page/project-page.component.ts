import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { StoreService } from "../store.service";
import { Project } from "../datatypes/Project";
import { User } from "../datatypes/User";

@Component({
  selector: "app-project-page",
  templateUrl: "./project-page.component.html",
  styleUrls: ["./project-page.component.css"],
})
export class ProjectPageComponent implements OnInit {
  public project: Project;
  public currentUser: User = {
    userId: 2,
    userName: "Mariana",
    userEmail: "BringMarianaBananaToSchool@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  };

  constructor(@Inject(ActivatedRoute) public route: ActivatedRoute, @Inject(StoreService) private store: StoreService) {
    /**
     * Subscribe to id param in the ActivatedRoute
     * and get project's object from store.service
     */
    route.params.subscribe((params: Params) => {
      this.store.retrieveProject(params.id);
      this.store.project$.subscribe(project => (this.project = project));
    });
  }

  ngOnInit() { }
}
