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

  // Observable
  public user$: Observable<UserState>;
  public yourProjects$: Observable<Array<Project>>;
  public exploreProjects$: Observable<Array<Project>>;

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
  }

  // Action
  register(userName: string, userEmail: string, password: string) {
    setTimeout(() => {
      this.user.next({
        status: { loggedIn: true },
        userInformation: { userName, userEmail, userImageURL: "", userId: 1234 }
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
   * Get Task object by Task id
   */
  retrieveTask(id: number): Task {
    return Mock.tasks.find(task => task.taskId == id);
  }

  /**
   * Get Array of Task Objects by projectID and location
   * @param projectID ID of the project
   * @param location location of the Task (starter, main, desert)
   * @returns Array of Task Objects
   */
  retrieveTasks(projectID: number, location: string): Task[] {
    return Mock.tasks.filter(task => task.projectId == projectID);
  }

  /**
   * Get Project object by Project id
   */
  retrieveProject(id: number): Project {
    // console.log(this.projects);
    return Mock.projects.find(project => project.projectId == id);
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
}
