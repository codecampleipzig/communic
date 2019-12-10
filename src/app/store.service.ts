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
  providedIn: "root",
})
export class StoreService {
  // Internal State
  user: BehaviorSubject<UserState>;
  yourProjects: BehaviorSubject<Array<Project>>;
  exploreProjects: BehaviorSubject<Array<Project>>;
  project: BehaviorSubject<Project>;
  toolbar: BehaviorSubject<any>;
  status: BehaviorSubject<any>;

  // Observable
  public user$: Observable<UserState>;
  public yourProjects$: Observable<Array<Project>>;
  public exploreProjects$: Observable<Array<Project>>;
  public project$: Observable<Project>;
  public toolbar$: Observable<any>;
  public status$: Observable<any>;

  constructor(
    @Inject(Router) private router: Router,
    @Inject(AuthService) private authService: AuthService,
    @Inject(ProjectsService) private projectsService: ProjectsService,
    @Inject(ProjectService) private projectService: ProjectService,
  ) {
    this.user = new BehaviorSubject<UserState>({
      status: {},
      userInformation: null,
    });
    this.user$ = this.user.asObservable();

    this.yourProjects = new BehaviorSubject<Array<Project>>([]);
    this.yourProjects$ = this.yourProjects.asObservable();

    this.exploreProjects = new BehaviorSubject<Array<Project>>([]);
    this.exploreProjects$ = this.exploreProjects.asObservable();

    this.project = new BehaviorSubject<any>(null);
    this.project$ = this.project.asObservable();

    this.toolbar = new BehaviorSubject<any>("");
    this.toolbar$ = this.toolbar.asObservable();

    this.status = new BehaviorSubject<any>({
      sectionCreationPending: false,
    });
    this.status$ = this.status.asObservable();

    /* Mock Current User. Replace with login Action */
    this.user.next({
      status: { loggedIn: false },
      userInformation: {
        userId: 2,
        userName: "TestUser",
        userEmail: "email@gmail.com",
        userImageUrl: "",
      },
    });
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
        userInformation: user,
      });

      // Navigate to home page
      this.router.navigate(["home"]);
    });
    promise.catch(error => {
      this.user.next({
        status: { error },
        userInformation: null,
      });
    });
  }

  login(userEmail: string, password: string) {}

  logout() {
    // Mutation
    this.user.next({
      status: {},
      userInformation: null,
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
   * @param projectId: project ID
   */
  retrieveProject(projectId: number): void {
    const promise = this.projectService.getProject(projectId);

    promise.then(project => {
      // Put value into observable
      this.project.next(project);
    });
  }

  /**
   * Destroy project
   */
  unloadProject(): void {
    this.project.next(null);
  }

  /**
   * triggers projectService.updateTaskStatus and resolves its GET request to pass newTasks via newProject into project observable.
   */
  updateTaskStatus(projectId: number, taskId: number, status: string) {
    const promise = this.projectService.updateTaskStatus(taskId, status);

    promise.then(newProject => {
      // Put value into observable
      this.project.next(newProject);
    });
  }

  /**
   * triggers projectService.joinProjectTeam and resolves its GET request to pass newProject into project observable.
   */
  joinProjectTeam(projectId: number, userId: number) {
    const promise = this.projectService.joinProjectTeam(projectId, userId);

    promise.then(newProject => {
      // Put value into observable
      this.project.next(newProject);
    });
  }

  /**
   * triggers projectService.leaveProjectTeam and resolves its GET request to pass newProject into project observable.
   */
  leaveProjectTeam(projectId: number, userId: number) {
    const promise = this.projectService.leaveProjectTeam(projectId, userId);

    promise.then(newProject => {
      // Put value into observable
      this.project.next(newProject);
    });
  }

  /**
   * triggers projectService.joinTaskTeam and resolves its GET request to pass newProject into project observable.
   */
  joinTaskTeam(projectId: number, taskId: number, userId: number) {
    const promise = this.projectService.joinTaskTeam(projectId, taskId, userId);

    promise.then(newProject => {
      // Put value into observable
      this.project.next(newProject);
    });
  }

  /**
   * triggers projectService.leaveTaskTeam and resolves its GET request to pass newProject into project observable.
   */
  leaveTaskTeam(projectId: number, taskId: number, userId: number) {
    const promise = this.projectService.leaveTaskTeam(projectId, taskId, userId);

    promise.then(newProject => {
      // Put value into observable
      this.project.next(newProject);
    });
  }

  createNewSection(
    projectId: number,
    title: string,
    description: string,
    due: Date,
    status: string,
    creatorId: number,
  ) {
    this.updateStatus({ sectionCreationPending: true });
    const promise = this.projectService.createNewSection(projectId, title, description, due, status, creatorId);

    promise.then(newProject => {
      // Put value into observable
      this.project.next(newProject);
      this.updateStatus({ sectionCreationPending: false });
    });
  }

  updateStatus(value: object) {
    this.status.next({ ...this.status, ...value });
  }
}
