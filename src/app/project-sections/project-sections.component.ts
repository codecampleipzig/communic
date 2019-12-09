import { Component, OnInit, Input, Inject } from "@angular/core";
import { Project } from "../datatypes/Project";
import { Section } from "../datatypes/Section";
import { StoreService } from "../store.service";
import { UserState } from "../datatypes/User";

@Component({
  selector: "app-project-sections",
  templateUrl: "./project-sections.component.html",
  styleUrls: ["./project-sections.component.css"],
})
export class ProjectSectionsComponent implements OnInit {
  public userState: UserState;
  // Get project's object by parent component app-project-page
  @Input() public project: Project;
  @Input() public section: Section;

  constructor(@Inject(StoreService) private store: StoreService) {
    this.store.user$.subscribe(user => (this.userState = user));
  }

  /**
   * Check if userState is part of the project
   */
  joined(): boolean {
    return Boolean(this.project.projectTeam.find(team => team.userId == this.userState.userInformation.userId));
  }

  ngOnInit() {}
}
