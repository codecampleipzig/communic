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
import { User } from "./datatypes/User";

import * as Mock from "./mockdata";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

interface UserState {
  status: any;
  userInformation: User | null;
}

@Injectable({
  providedIn: "root"
})
export class StoreService {
  constructor(
    @Inject(Router) private router: Router,
    @Inject(AuthService) private authService: AuthService
  ) {
    this.user = new BehaviorSubject<UserState>({
      status: {},
      userInformation: null
    });
    this.user$ = this.user.asObservable();

    this.projects = new BehaviorSubject<Array<Project>>(Mock.projects);
    this.projects$ = this.projects.asObservable();
  }

  // Internal State
  user: BehaviorSubject<UserState>;
  projects: BehaviorSubject<Array<Project>>;

  // Observable
  public user$: Observable<UserState>;
  public projects$: Observable<Array<Project>>;

  // Old Store Service
  // TODO: Refactor

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
    const user = Mock.users.find(user => user.userId == userId);
    return user;
  }
}
