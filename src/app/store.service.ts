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
  messages: BehaviorSubject<any>;

  // Observable
  public user$: Observable<UserState>;
  public yourProjects$: Observable<Array<Project>>;
  public exploreProjects$: Observable<Array<Project>>;
  public project$: Observable<Project>;
  public toolbar$: Observable<any>;
  public status$: Observable<any>;
  public messages$: Observable<any>;

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

    this.messages = new BehaviorSubject<any[]>([]);
    this.messages$ = this.messages.asObservable();

    /* Mock Current User. Replace with login Action */
    this.user.next({
      status: { loggedIn: true },
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
  }

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
      if (status == "done") {
        this.newMessage("confirm", "Great job!", "You did it! You are great!", 3000);
      }
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

  /**
   * Create a new Section
   */
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

    promise
      .then(response => {
        // Put value into observable
        this.project.next(response.data.project);
        this.updateStatus({ sectionCreationPending: false });
        this.newMessage("confirm", "Something great happend!", "Your new section was created successfully!", 3000);
      })
      .catch(error => {
        console.error(error.response.data);
        this.newMessage("error", "Something went wrong..", error.response.data.error);
      });
  }

  /**
   * Update Values in the Status Observable
   * @param value Object of values that should be updated
   */
  updateStatus(value: object) {
    this.status.next({ ...this.status.getValue(), ...value });
  }

  /**
   * newMessage adds a Message for Errors or other stuff to the Notifications-Stack in the Frontend.
   * @param type error or confirm?
   * @param title Give it a title!
   * @param message Give it a short message
   * @param autoClose in ms
   * @param icon the Font Awesome icon type for the app-icon component. Get's set by type if not specified
   */
  newMessage(
    type: "error" | "confirm",
    title: string,
    message?: string,
    autoClose: number | boolean = false,
    icon?: string,
  ) {
    const id = this.messages.getValue().length + 1;
    const newMessage = { id, type, title, message, autoClose, icon };

    this.messages.next([...this.messages.getValue(), newMessage]);
  }

  /**
   * Close the message by id
   * @param id the Message ID
   */
  closeMessage(id: number) {
    const newState = this.messages.getValue().filter(m => m.id != id);
    this.messages.next(newState);
  }

  /**
   * Creates a new task
   */
  createTask(
    projectId: number,
    taskTitle: string,
    taskDescription: string,
    taskStatus: string,
    taskCreator: number,
    sectionId: number,
  ) {
    this.updateStatus({ taskCreationPending: true });
    const promise = this.projectService.createTask(
      projectId,
      taskTitle,
      taskDescription,
      taskStatus,
      taskCreator,
      sectionId,
    );

    promise
      .then(newProject => {
        // Put value into observable
        this.project.next(newProject);
        this.updateStatus({ taskCreationPending: false });
        this.newMessage("confirm", "New task", "You've added a new task!", 3000);
      })
      .catch(error => {
        console.error(error.response.data);
        this.newMessage("error", "Something went wrong...", error.response.data.error);
      });
  }
}
