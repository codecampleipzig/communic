/**
 * The store is componed by observables and we are triggering a reaction in our components. Mutation.
 * We are storing things a string of values.
 * We are creating a local DB.
 * We need to find a consensus in this file. How we are all going to work and interact with it.
 * The mock data will go another services which will be replace by a DB.
 */
import { Injectable, Inject } from "@angular/core";
import { Task } from "./datatypes/Task";
import { Project } from "./datatypes/Project";
import { User, UserState } from "./datatypes/User";

import * as Mock from "./mockdata";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { ProjectService } from "./project.service";
import { ProjectsService } from "./projects.service";

@Injectable({
  providedIn: "root"
})
export class StoreService {
  // Internal State
  user: BehaviorSubject<UserState>;
  yourProjects: BehaviorSubject<Array<Project>>;
  exploreProjects: BehaviorSubject<Array<Project>>;
  project: BehaviorSubject<Project>;
  toolbar: BehaviorSubject<any>;

  // Observable
  public user$: Observable<UserState>;
  public yourProjects$: Observable<Array<Project>>;
  public exploreProjects$: Observable<Array<Project>>;
  public project$: Observable<Project>;
  public toolbar$: Observable<any>;

  constructor(
    @Inject(Router) private router: Router,
    @Inject(AuthService) private authService: AuthService,
    @Inject(ProjectsService) private projectsService: ProjectsService,
    @Inject(ProjectService) private projectService: ProjectService
  ) {
    this.user = new BehaviorSubject<UserState>({
      status: {},
      userInformation: null
    });
    this.user$ = this.user.asObservable();

    this.yourProjects = new BehaviorSubject<Array<Project>>([]);
    this.yourProjects$ = this.yourProjects.asObservable();

    this.exploreProjects = new BehaviorSubject<Array<Project>>([]);
    this.exploreProjects$ = this.exploreProjects.asObservable();

    this.project = new BehaviorSubject<any>({});
    this.project$ = this.project.asObservable();

    this.toolbar = new BehaviorSubject<any>("");
    this.toolbar$ = this.toolbar.asObservable();
  }

  // Action
  register(userName: string, userEmail: string, password: string) {
    // Talk to Auth Service. It returns a promise of a User object
    const promise = this.authService.register(userName, userEmail, password);

    // When Promise is resolved successfully, then:
    promise.then(user => {
      // Put value into observable
      this.user.next({
        status: { loggedIn: true },
        userInformation: user
      });

      // Navigate to home page
      this.router.navigate(["home"]);
    });
  }

  logout() {
    // Mutation
    this.user.next({
      status: {},
      userInformation: null
    });
    // Navigate to register page
    this.router.navigate(["register"]);
  }

  // Action - retrieve projects based on userId

  retrieveYourProjects() {
    let userId: number;
    if (!this.user.getValue().userInformation) {
      userId = 1; // TODO: Modify/remove this once we have auth in place
    } else {
      userId = this.user.getValue().userInformation.userId;
    }
    console.log(`Your Projects - userId: ${userId}`);
    const promise = this.projectsService.retrieveYourProjects(userId);

    promise
      .then(projects => {
        this.yourProjects.next(projects);
      })
      .catch();
  }

  retrieveExploreProjects() {
    let userId: number;
    if (!this.user.getValue().userInformation) {
      userId = 1; // TODO: Modify/remove this once we have auth in place
    } else {
      userId = this.user.getValue().userInformation.userId;
    }
    console.log(`Explore Projects - userId: ${userId}`);
    const promise = this.projectsService.retrieveExploreProjects(userId);

    promise
      .then(projects => {
        this.exploreProjects.next(projects);
      })
      .catch();
  }

  /**
   * Get UserList
   * @returns a list of all the User
   */
  retrieveUserList(): User[] {
    return Mock.users;
  }
  /**
   * Get User by Id
   */
  retrieveUser(userId: number): User {
    return Mock.users.find(user => user.userId == userId);
  }

  /**
   * resolves GET request and passes project Data into project observable
   * @param id: project ID
   */
  retrieveProject(id: number) {
    const promise = this.projectService.getProject(id);

    promise.then(project => {
      // Put value into observable
      this.project.next(project);
    });
  }

  /**
   * resolves GET request and passes newTasks via newProject into project observable.
   */
  updateTaskStatus(projectId: number, taskId: number, status: string) {
    const promise = this.projectService.updateTaskStatus(taskId, status);

    promise.then(newTasks => {
      const newState = [...Mock.projects];
      const newProject = newState.find(
        project => project.projectId == projectId
      );
      newProject.projectTasks = newTasks;

      // Put value into observable
      this.project.next(newProject);
    });
  }
}
