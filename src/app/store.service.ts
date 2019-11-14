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

interface UserState {
  status: any,
  userInformation: User | null
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
 
  // Internal State
  _user : BehaviorSubject<UserState>;

  // Observable
  public user$ : Observable<UserState>

  constructor(@Inject(Router) private router: Router, @Inject(AuthService) private authService: AuthService) { 
    this._user = new BehaviorSubject<UserState>({status: {}, userInformation: null});
    this.user$ = this._user.asObservable();
  }

  // Action
  register(userName: string, userEmail: string, password: string) {
    // Talk to Auth Service. It returns a promise of a User object
    const promise = this.authService.register (userName, userEmail, password);

    // When Promise is resolved successfully, then:
    promise.then ((user) => {
      // Put value into observable
      this._user.next({
        status: {loggedIn: true},
        userInformation: user
      });

      // Navigate to home page
      this.router.navigate(['home']);
    })
  }

  logout () {
    
    // Mutation
    this._user.next({
      status: {},
      userInformation: null
    });
    // Navigate to register page
    this.router.navigate(['register']);
  }

  // Old Store Service
  // TODO: Refactor

  /**
   * Mock Data for Tasks & Projects
   */
  private tasks: Task[] = Mock.tasks;
  private projects: Project[] = Mock.projects;
  private users : User[] = Mock.users;
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
   * Get UserList
   * @returns a list of all the User
   */
  retrieveUserList() : User [] {
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
