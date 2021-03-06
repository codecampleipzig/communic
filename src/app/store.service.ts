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
import { BehaviorSubject, Observable, pipe } from "rxjs";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { AuthService } from "./auth.service";
import { ProjectService } from "./project.service";
import { ProjectsService } from "./projects.service";
import { axiosInstance } from "./axios-instance";
import { environment } from "src/environments/environment";
import { filter, map } from "rxjs/operators";
import { classMethod } from "@babel/types";
import jwt from "jwt-decode";

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
      userToken: null,
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

    if (!environment.production) {
      const testToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJ1c2VyTmFtZSI6IlJlZzEiLCJ1c2VyRW1haWwiOiJyZWcxQHJlZy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ2bjhOOUs4cHBxT3JqZFhsalNJcU8uVThoNmxuTDY5Ry80QzFXZi41U3RIMVNTd2xHTkU0VyIsInVzZXJJbWFnZVVybCI6bnVsbCwiam9pbkRhdGUiOiIyMDE5LTEyLTA0VDE0OjUxOjIwLjEwM1oiLCJsZWF2ZURhdGUiOm51bGwsImlhdCI6MTU3NTQ3NDkxOX0.nrHFu4PhmpNTShq909qNj8geVBACB5XWDhT2OSgkxlY";
      this.user.next({
        status: { loggedIn: true },
        userInformation: {
          userName: "Rick",
          userId: 1,
          userImageUrl: "",
          userEmail: "rick@sanchez.com",
        },
        userToken: testToken,
      });
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${testToken}`;
    }

    const storedToken = localStorage.getItem("token");
    try {
      if (storedToken) {
        const decodedUser = jwt(storedToken);
        console.log(decodedUser);
        this.user.next({
          status: { loggedIn: true },
          userInformation: decodedUser,
          userToken: storedToken,
        });
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
      }
    } catch (error) {
      console.log(error);
    }
    // Auto reset loading on every route change
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.finishLoading();
      }
    });
  }

  startLoading() {
    this.status.next({ ...this.status.getValue(), loading: true });
  }

  finishLoading() {
    this.status.next({ ...this.status.getValue(), loading: false });
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
    this.startLoading();
    // Talk to Auth Service. It returns a promise of a User object
    const promise = this.authService.register(userName, userEmail, password, userImageUrl);

    // When Promise is resolved successfully, then:
    promise
      .then(response => {
        // Put value into observable
        this.user.next({
          status: { loggedIn: true },
          userInformation: response.user,
          userToken: response.token,
        });

        localStorage.setItem("token", response.token);

        // Set userToken as value for the header Authorization to be sent in each subsequent request
        // TODO: localStorage.setItem(token)
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}`;
        // axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.token}`;

        // Navigate to home page
        this.router.navigate(["home"]);
      })
      .catch(error => {
        this.user.next({
          status: { error: error.response.data.error },
          userInformation: null,
          userToken: null,
        });
        // TODO: Display message after merge from develop
        this.newMessage("error", "Registration failed!", error.response.data.message, 3000);
      })
      .finally(() => {
        this.finishLoading();
      });
  }

  /**
   * Triggers authService.register and resolves its POST request to pass loginUserData into user observable and sets userToken
   * @param userEmail Email provided on the Login form
   * @param password Password provided on the Login form
   */
  login(userEmail: string, password: string) {
    this.startLoading();
    // Talk to Auth Service. It returns a promise of a User object
    const promise = this.authService.login(userEmail, password);

    // When Promise is resolved successfully, then:
    promise
      .then(response => {
        // Put value into observable
        this.user.next({
          status: { loggedIn: true },
          userInformation: response.user,
          userToken: response.token,
        });

        localStorage.setItem("token", response.token);

        // Set userToken as value for the header Authorization to be sent in each subsequent request
        // TODO: localStorage.setItem(token)
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("token")}`;
        // axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.token}`;

        // Navigate to home page
        this.router.navigate(["home"]);
      })
      .catch(error => {
        this.user.next({
          status: { error: error.response.data.message },
          userInformation: null,
          userToken: null,
        });

        this.newMessage("error", "Login failed!", error.response.data.message, 3000);
      })
      .finally(() => {
        this.finishLoading();
      });
  }

  /**
   * Logout user - set userToken to null and delete Authorization header that is sent in each subsequent request for authorized users
   */
  logout() {
    // Mutation
    this.user.next({
      status: {},
      userInformation: null,
      userToken: null,
    });

    // Delete userToken and the Authorization header
    localStorage.removeItem("token");
    delete axiosInstance.defaults.headers.common.Authorization;

    // Navigate to login page
    this.router.navigate(["login"]);
  }

  /**
   * After requesting a password reset email you will be redirected to the login screen.
   * @param userEmail Email provided on the Login form
   */
  // TODO: Implement resetPassword
  resetPassword(userEmail: string) {
    this.router.navigate(["login"]);
    console.log("reset password");
  }

  /**
   * After clicking the link in the email to reset your password you will be redirected to the login screen.
   */
  // TODO: Implement changePassword
  changePassword(password: string) {
    this.router.navigate(["login"]);
    console.log("change password");
  }

  /**
   * Retrieve projects where current user is member to fill the "Your Projects" section on Home page
   */
  retrieveYourProjects() {
    let userId: number;
    if (!this.user.getValue().userInformation) {
      throw new Error("No user logged in");
    } else {
      userId = this.user.getValue().userInformation.userId;
    }
    const promise = this.projectsService.retrieveYourProjects(userId);

    promise
      .then(projects => {
        this.yourProjects.next(projects);
      })
      .catch(error => {
        this.newMessage(
          "error",
          "Loading your projects failed!",
          error.response ? error.response.data.message : "",
          3000,
        );
      });
  }
  /**
   * Retrieve projects where current user is NOT member to fill the "Explore Projects" section on Home page
   */
  retrieveExploreProjects() {
    let userId: number;
    if (!this.user.getValue().userInformation) {
      throw new Error("No user logged in");
    } else {
      userId = this.user.getValue().userInformation.userId;
    }
    const promise = this.projectsService.retrieveExploreProjects(userId);

    promise
      .then(projects => {
        this.exploreProjects.next(projects);
      })
      .catch(error => {
        this.newMessage(
          "error",
          "Loading explore projects failed!",
          error.response ? error.response.data.message : "",
          3000,
        );
      });
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

    promise
      .then(project => {
        // Put value into observable
        this.project.next(project);
      })
      .catch(error => {
        this.newMessage("error", "Loading project failed!", error.response ? error.response.data.message : "", 3000);
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

    promise
      .then(newProject => {
        // Put value into observable
        this.project.next(newProject);
        if (status == "done") {
          this.newMessage("confirm", "Great job!", "You did it! You are great!", 3000);
        }
      })
      .catch(error => {
        this.newMessage(
          "error",
          "Loading updated project failed!",
          error.response ? error.response.data.message : "",
          3000,
        );
      });
  }

  /**
   * triggers projectService.joinProjectTeam and resolves its GET request to pass newProject into project observable.
   */
  joinProjectTeam(projectId: number, userId: number) {
    const promise = this.projectService.joinProjectTeam(projectId, userId);

    promise
      .then(newProject => {
        // Put value into observable
        this.project.next(newProject);
        this.newMessage("confirm", "Success!", "You joined the project successfully!", 3000);
      })
      .catch(error => {
        this.newMessage(
          "error",
          "Loading updated project failed!",
          error.response ? error.response.data.message : "",
          3000,
        );
      });
  }

  /**
   * triggers projectService.leaveProjectTeam and resolves its GET request to pass newProject into project observable.
   */
  leaveProjectTeam(projectId: number, userId: number) {
    const promise = this.projectService.leaveProjectTeam(projectId, userId);

    promise
      .then(newProject => {
        // Put value into observable
        this.project.next(newProject);
        this.newMessage("confirm", "Success!", "You left the project successfully!", 3000);
      })
      .catch(error => {
        this.newMessage(
          "error",
          "Loading updated project failed!",
          error.response ? error.response.data.message : "",
          3000,
        );
      });
  }

  /**
   * triggers projectService.joinTaskTeam and resolves its GET request to pass newProject into project observable.
   */
  joinTaskTeam(projectId: number, taskId: number, userId: number) {
    const promise = this.projectService.joinTaskTeam(projectId, taskId, userId);

    promise
      .then(newProject => {
        // Put value into observable
        this.project.next(newProject);
        this.newMessage("confirm", "Success!", "You joined the task successfully!", 3000);
      })
      .catch(error => {
        this.newMessage(
          "error",
          "Loading updated project failed!",
          error.response ? error.response.data.message : "",
          3000,
        );
      });
  }

  /**
   * triggers projectService.leaveTaskTeam and resolves its GET request to pass newProject into project observable.
   */
  leaveTaskTeam(projectId: number, taskId: number, userId: number) {
    const promise = this.projectService.leaveTaskTeam(projectId, taskId, userId);

    promise
      .then(newProject => {
        // Put value into observable
        this.project.next(newProject);
        this.newMessage("confirm", "Success!", "You left the task successfully!", 3000);
      })
      .catch(error => {
        this.newMessage(
          "error",
          "Loading updated project failed!",
          error.response ? error.response.data.message : "",
          3000,
        );
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
        this.newMessage("confirm", "Something great happened!", "Your new section was created successfully!", 3000);
      })
      .catch(error => {
        this.newMessage("error", "Something went wrong..", error.response ? error.response.data.message : "", 3000);
      });
  }
  /**
   * Create a new Project
   */
  createNewProject(title: string, imageUrl: string, description: string, goal: string, creatorId: number) {
    const promise = this.projectService.createNewProject(title, imageUrl, description, goal, creatorId);

    promise
      .then(response => {
        this.router.navigate([`project/${response.data.projectId}`]);
        this.newMessage("confirm", "Project created successfully!", "Your new project was created successfully!", 3000);
      })
      .catch(error => {
        this.newMessage("error", "Project creation failed!", error.response ? error.response.data.message : "", 3000);
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
        this.newMessage("error", "Something went wrong...", error.response ? error.response.data.message : "", 3000);
      });
  }
}
