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

  // Observable
  public user$: Observable<UserState>;
  public yourProjects$: Observable<Array<Project>>;
  public exploreProjects$: Observable<Array<Project>>;
  public project$: Observable<Project>;

  constructor() {
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

    /* Mock Current User. Replace with login Action */
    this.user.next({
      status: { loggedIn: true },
      userInformation: {
        userId: 2,
        userName: "TestUser",
        userEmail: "email@gmail.com",
        userImageUrl: ""
      }
    });
  }

  // Action
  register(userName: string, userEmail: string, password: string) {
    setTimeout(() => {
      this.user.next({
        status: { loggedIn: true },
        userInformation: { userName, userEmail, userImageUrl: "", userId: 1234 }
      });
    });
  }

  logout() {
    // Mutation
    this.user.next({
      status: {},
      userInformation: null
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
        project.projectTeam.some(
          user => user.userId == currentUserState.userInformation.userId
        )
      )
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
    newProject.projectTasks = newTasks;

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
}
