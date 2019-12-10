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
import { axiosInstance } from './axios-instance';

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
      userToken: null
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
      status: { loggedIn: true },
      userInformation: {
        userId: 2,
        userName: "TestUser",
        userEmail: "email@gmail.com",
        userImageUrl: ""
      },
      userToken: ""
    });
  }

  /**
   * Triggers authService.register and resolves its POST request to pass registerUserData into user observable and sets userToken
   * 
   * @param userName Name provided on the Register form
   * @param userEmail Email provided on the Register form
   * @param password Password provided on the Register form
   * @param userImageUrl Image uploaded on the Register form
   */
  register(userName: string, userEmail: string, password: string, userImageUrl: string = "") {
    // Talk to Auth Service. It returns a promise of a User object
    const promise = this.authService.register(userName, userEmail, password, userImageUrl);

    // When Promise is resolved successfully, then:
    promise.then(user => {
      // Put value into observable
      this.user.next({
        status: { loggedIn: true },
        userInformation: user,
        userToken: user.token
      });

      // Set userToken as value for the header Authorization to be sent in each subsequent request
      // TODO: localStorage.setItem(token)
      axiosInstance.defaults.headers.common['Authorization'] = user.token;

      // Navigate to home page
      this.router.navigate(["home"]);
    });
    promise.catch(error => {
      this.user.next({
        status: { error: error.response.data.error },
        userInformation: null,
        userToken: null
      });
    })

  }

  /**
   * Triggers authService.register and resolves its POST request to pass loginUserData into user observable and sets userToken
   * @param userEmail Email provided on the Login form
   * @param password Password provided on the Login form
   */
  login(userEmail: string, password: string) {

    // Talk to Auth Service. It returns a promise of a User object
    const promise = this.authService.login(userEmail, password);

    // When Promise is resolved successfully, then:
    promise.then(user => {
      // Put value into observable
      this.user.next({
        status: { loggedIn: true },
        userInformation: user,
        userToken: user.token
      });

      // Set userToken as value for the header Authorization to be sent in each subsequent request
      // TODO: localStorage.setItem(token)
      axiosInstance.defaults.headers.common['Authorization'] = user.token;

      // Navigate to home page
      this.router.navigate(["home"])
    })
  }

  /**
   * Logout user - set userToken to null and delete Authorization header that is sent in each subsequent request for authorized users
   */
  logout() {
    // Mutation
    this.user.next({
      status: {},
      userInformation: null,
      userToken: null
    });

    // Delete userToken and the Authorization header
    delete axiosInstance.defaults.headers.common['Authorization'];

    // Navigate to register page
    this.router.navigate(["register"]);
  }

  /**
   * Retrieve projects where current user is member to fill the "Your Projects" section on Home page
   */
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
  /**
   * Retrieve projects where current user is NOT member to fill the "Explore Projects" section on Home page
   */
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
