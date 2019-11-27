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
