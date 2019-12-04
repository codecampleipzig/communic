import { Component, OnInit, Input, Inject } from "@angular/core";
import { Task } from "../datatypes/Task";
import { Project } from "../datatypes/Project";
import { User, UserState } from "../datatypes/User";
import { StoreService } from "../store.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  public userState: UserState;
  public team: User[];
  public tasks: Task[] = [];

  /**
   * Get project's object by parent component app-project-page
   */
  @Input() public project: Project;

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
