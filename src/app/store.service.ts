/**
 * The store is componed by observables and we are triggering a reaction in our components. Mutation.
 * We are storing things a string of values.
 * We are creating a local DB.
 * We need to find a consensus in this file. How we are all going to work and interact with it.
 * The mock data will go another services which will be replace by a DB.
 */
import { Injectable, Inject } from '@angular/core';
import { Task } from './datatypes/Task';
import { Project } from './datatypes/Project';
import { User } from './datatypes/User'

import * as Mock from './mockdata';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ProjectsService } from './projects.service';


interface UserState {
  status: any,
  userInformation: User | null
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  // Internal State
  _user: BehaviorSubject<UserState>;
  _yourProjects: BehaviorSubject<Array<Project>>;
  _exploreProjects: BehaviorSubject<Array<Project>>;

  // Observable
  public user$: Observable<UserState>;
  public yourProjects$: Observable<Array<Project>>;
  public exploreProjects$: Observable<Array<Project>>;

  constructor(
    @Inject(Router) private router: Router,
    @Inject(AuthService) private authService: AuthService,
    @Inject(ProjectsService) private projectsService: ProjectsService) {

    this._user = new BehaviorSubject<UserState>({ status: {}, userInformation: null });
    this.user$ = this._user.asObservable();

    this._yourProjects = new BehaviorSubject<Array<Project>>([]);
    this.yourProjects$ = this._yourProjects.asObservable();

    this._exploreProjects = new BehaviorSubject<Array<Project>>([]);
    this.exploreProjects$ = this._exploreProjects.asObservable();
  }

  // Action
  register(userName: string, userEmail: string, password: string) {
    // Talk to Auth Service. It returns a promise of a User object
    const promise = this.authService.register(userName, userEmail, password);

    // When Promise is resolved successfully, then:
    promise.then((user) => {
      // Put value into observable
      this._user.next({
        status: { loggedIn: true },
        userInformation: user
      });

      // Navigate to home page
      this.router.navigate(['home']);
    })
  }

  logout() {

    // Mutation
    this._user.next({
      status: {},
      userInformation: null
    });
    // Navigate to register page
    this.router.navigate(['register']);
  }

  // Action - retrieve projects based on usedId

  retrieveYourProjects() {
    let userId: number;
    if (!this._user.getValue().userInformation) {
      userId = 1; // TODO: Modify/remove this once we have auth in place
    } else {
      userId = this._user.getValue().userInformation.userId;
    }
    console.log(`Your Projects - userId: ${userId}`);
    const promise = this.projectsService.retrieveYourProjects(userId);

    promise.then(projects => {
      this._yourProjects.next(projects);
    }).catch()
  }

  retrieveExploreProjects() {
    let userId: number;
    if (!this._user.getValue().userInformation) {
      userId = 1; // TODO: Modify/remove this once we have auth in place
    } else {
      userId = this._user.getValue().userInformation.userId;
    }
    console.log(`Explore Projects - userId: ${userId}`);
    const promise = this.projectsService.retrieveExploreProjects(userId);

    promise.then(projects => {
      this._exploreProjects.next(projects);
    }).catch()

  }

  // Old Store Service
  // TODO: Refactor

  /**
   * Mock Data for Tasks & Projects
   */
  private tasks: Task[] = Mock.tasks;
  private projects: Project[] = Mock.projects;
  private users: User[] = Mock.users;
  /**
 * Get Task object by Task id
 * @param id
 * @returns Task object 
 */
  retrieveTask(id: number): Task {
    return this.tasks.find(task => task.id == id);
  }

  /**
   * Get Array of Task Objects by projectID and location
   * @param projectID ID of the project
   * @param location location of the Task (starter, main, desert)
   * @returns Array of Task Objects
   */
  retrieveTasks(projectID: number, location: string): Task[] {
    return this.tasks.filter(task => task.projectID == projectID && task.location == location);
  }

  /**
   * Get Project object by Project id
   * @param id
   * @returns Project object 
   */
  retrieveProject(id: number): Project {
    return this.projects.find(project => project.id == id);
  }

  /**
   * Get UserList
   * @returns a list of all the User
   */
  retrieveUserList(): User[] {
    return this.users;
  }
  /**
   * Get User by Id
   * @param userId 
   * @returns User
   */
  retrieveUser(userId: number): User {
    return this.users.find(user => user.userId == userId);
  }
}
