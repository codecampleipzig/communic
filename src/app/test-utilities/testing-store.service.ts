import { BehaviorSubject, Observable } from "rxjs";
import { UserState } from "../datatypes/User";
import { Project } from "../datatypes/Project";
import * as Mock from "../mockdata";
import { Task } from "../datatypes/Task";
import { User } from "../datatypes/User";

export class TestingStoreService {
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

  constructor() {
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

    /* Mock Current User. Replace with login Action */
    this.user.next({
      status: { loggedIn: true },
      userInformation: {
        userId: 2,
        userName: "TestUser",
        userEmail: "email@gmail.com",
        userImageUrl: "",
      },
      userToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJ1c2VyTmFtZSI6IlJlZzEiLCJ1c2VyRW1haWwiOiJyZWcxQHJlZy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ2bjhOOUs4cHBxT3JqZFhsalNJcU8uVThoNmxuTDY5Ry80QzFXZi41U3RIMVNTd2xHTkU0VyIsInVzZXJJbWFnZVVybCI6bnVsbCwiam9pbkRhdGUiOiIyMDE5LTEyLTA0VDE0OjUxOjIwLjEwM1oiLCJsZWF2ZURhdGUiOm51bGwsImlhdCI6MTU3NTQ3NDkxOX0.nrHFu4PhmpNTShq909qNj8geVBACB5XWDhT2OSgkxlY",
    });

    this.toolbar = new BehaviorSubject<any>("");
    this.toolbar$ = this.toolbar.asObservable();

    this.status = new BehaviorSubject<any>({
      sectionCreationPending: false,
    });
    this.status$ = this.status.asObservable();

    this.messages = new BehaviorSubject<any[]>([
      { id: 0, type: "error", title: "Something happend", message: "test!" },
    ]);
    this.messages$ = this.messages.asObservable();
  }

  // Action
  register(userName: string, userEmail: string, password: string) {
    setTimeout(() => {
      this.user.next({
        status: { loggedIn: true },
        userInformation: { userName, userEmail, userImageUrl: "", userId: 1234 },
        userToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJ1c2VyTmFtZSI6IlJlZzEiLCJ1c2VyRW1haWwiOiJyZWcxQHJlZy5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCQ2bjhOOUs4cHBxT3JqZFhsalNJcU8uVThoNmxuTDY5Ry80QzFXZi41U3RIMVNTd2xHTkU0VyIsInVzZXJJbWFnZVVybCI6bnVsbCwiam9pbkRhdGUiOiIyMDE5LTEyLTA0VDE0OjUxOjIwLjEwM1oiLCJsZWF2ZURhdGUiOm51bGwsImlhdCI6MTU3NTQ3NDkxOX0.nrHFu4PhmpNTShq909qNj8geVBACB5XWDhT2OSgkxlY",
      });
    });
  }

  logout() {
    // Mutation
    this.user.next({
      status: {},
      userInformation: null,
      userToken: null,
    });
  }

  // Action - retrieve projects based on usedId

  retrieveYourProjects() {
    const currentUserState = this.user.getValue();
    if (!currentUserState.userInformation) {
      return;
    }

    this.yourProjects.next(
      Mock.projects.filter(project =>
        project.projectTeam.some(user => user.userId == currentUserState.userInformation.userId),
      ),
    );
  }

  retrieveExploreProjects() {
    const currentUserState = this.user.getValue();

    this.exploreProjects.next(Mock.projects);
  }

  /**
   * Get Project object by Project id
   */
  retrieveProject(id: number): void {
    this.project.next(Mock.projects.find(p => p.projectId == id));
  }

  /**
   * triggers projectService.updateTaskStatus and resolves its GET request to pass newTasks via newProject into project observable.
   */
  updateTaskStatus(projectId: number, taskId: number, status: string) {
    const newTasks = [...Mock.tasks];
    newTasks.find(task => task.taskId == taskId).taskStatus = status;

    const newState = [...Mock.projects];
    const newProject = newState.find(project => project.projectId == projectId);
    newProject.projectSections[0].projectTasks = newTasks;

    // Put value into observable
    this.project.next(newProject);
  }

  /**
   * triggers projectService.joinProjectTeam and resolves its GET request to pass newProject into project observable.
   */
  joinProjectTeam(projectId: number, userId: number) {
    const newState = [...Mock.projects];
    const project = newState.find(p => p.projectId == projectId);
    const user = Mock.users.find(u => u.userId == userId);
    project.projectTeam.push(user);

    this.project.next(project);
  }

  /**
   * triggers projectService.joinProjectTeam and resolves its GET request to pass newProject into project observable.
   */
  leaveProjectTeam(projectId: number, userId: number) {
    const newState = [...Mock.projects];
    const project = newState.find(p => p.projectId == projectId);
    const userIndex = project.projectTeam.findIndex(u => u.userId == userId);
    project.projectTeam.splice(userIndex, 1);
    this.project.next(project);
  }

  /**
   * triggers projectService.joinTaskTeam and resolves its GET request to pass newProject into project observable.
   */
  joinTaskTeam(projectId: number, taskId: number, userId: number) {
    const newState = [...Mock.projects];
    const project = newState.find(p => p.projectId == projectId);
    const user = Mock.users.find(u => u.userId == userId);

    project.projectSections[0].projectTasks.find(t => t.taskId == taskId).taskTeam.push(user);
    this.project.next(project);
  }

  /**
   * triggers projectService.leaveTaskTeam and resolves its GET request to pass newProject into project observable.
   */
  leaveTaskTeam(projectId: number, taskId: number, userId: number) {
    const newState = [...Mock.projects];
    const project = newState.find(p => p.projectId == projectId);
    const userIndex = project.projectSections[0].projectTasks
      .find(t => t.taskId == taskId)
      .taskTeam.findIndex(u => u.userId == userId);

    project.projectSections[0].projectTasks.find(t => t.taskId == taskId).taskTeam.splice(userIndex, 1);

    this.project.next(project);
  }
}
