/**
 * The store is componed by observables and we are triggering a reaction in our components. Mutation.
 * We are storing things a string of values.
 * We are creating a local DB.
 * We need to find a consensus in this file. How we are all going to work and interact with it.
 * The mock data will go another services which will be replace by a DB.
 */
import { Injectable } from '@angular/core';
import { Task } from './datatypes/Task';
import { Project } from './datatypes/Project';
import { User } from './datatypes/User'

@Injectable({
  providedIn: 'root'
})

export class StoreService {

  /**
   * Create the method logout that is linked to the user-action.component.ts
   */
  logout () {
    console.log("logout");
  }
  /**
   * Mock Data for Tasks & Projects
   */
  private TASKS: Task[] = [
    { id: 1,
      name: 'Some Task Name Placeholder',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
      status: 'open',
      authorID: 1,
      userIDs: [1234, 5678, 9123, 4567, 8901],
      projectID: 9435,
      location: 'starter'
    },
    { id: 2,
        name: 'Some Other Task Name Placeholder',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        status: 'open',
        authorID: 1235,
        userIDs: [1235, 5678, 9123, 4567, 8901],
        projectID: 9435,
        location: 'starter'
    },
    { id: 3,
        name: 'Some Task',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        status: 'done',
        authorID: 1237,
        userIDs: [1237, 5678, 9123, 4567, 8901],
        projectID: 9435,
        location: 'starter'
    },
    { id: 4,
        name: 'Some Task',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        status: 'deleted',
        authorID: 1237,
        userIDs: [1237, 5678, 9123, 4567, 8901],
        projectID: 9435,
        location: 'starter'
    },
  ];

  private projects: Project[] = [
    { id: 9435,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
      goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
      authorID: 1,
      userIDs: [1234, 5678, 9123, 4567, 8901],
    },
  ]
  users : User[] = [
    { userName : "Mautzi", userEmail : "mausi95@gmail.com", imageURL : "../assets/serveimage.png", userId: 1},
    { userName : "Mariana", userEmail : "catFallsOnTheSofaWithFaceFirst@gmail.com", imageURL : "../assets/serveimage.png", userId: 2},
    { userName : "Lena", userEmail : "lenintheempress@gmail.com", imageURL : "../assets/serveimage.png", userId: 3},
    { userName : "Björn", userEmail : "thPObutNotTheRiver@gmail.com", imageURL : "../assets/serveimage.png", userId: 4},
    { userName : "Pauline", userEmail : "DelphineQueen@gmail.com", imageURL : "../assets/serveimage.png", userId: 5},
    { userName : "Nick", userEmail : "nickTheSwan@gmail.com", imageURL : "../assets/serveimage.png", userId: 6},
    { userName : "Nico", userEmail : "intelligentButBeautiful@gmail.com", imageURL : "../assets/serveimage.png", userId: 7},
    { userName : "Simona", userEmail : "deepBeutifulSea@gmail.com", imageURL : "../assets/serveimage.png", userId: 8},
    { userName : "Beatriz", userEmail : "womanWhoRockTheWorld@gmail.com", imageURL : "../assets/serveimage.png", userId: 9},
    { userName : "Anahita", userEmail : "bestBiologistInTheWorld@gmail.com", imageURL : "../assets/serveimage.png", userId: 10},
    { userName : "Kaab", userEmail : "theKricketEnthusiast@gmail.com", imageURL : "../assets/serveimage.png", userId: 11},
    { userName : "Andres", userEmail : "krawalloAndi@gmail.com", imageURL : "../assets/serveimage.png", userId: 12},
    { userName : "Iko", userEmail : "caretaker3000@gmail.com", imageURL : "../assets/serveimage.png", userId: 12},
  ];

  constructor() { }

  /**
   * Get Task object by Task id
   * @param id
   * @returns Task object 
   */
  retrieveTask(id: number): Task {
    return this.TASKS.find(task => task.id == id);
  }

  /**
   * Get Array of Task Objects by projectID and location
   * @param projectID ID of the project
   * @param location location of the Task (starter, main, desert)
   * @returns Array of Task Objects
   */
  retrieveTasks(projectID: number, location: string): Task[] {
    return this.TASKS.filter(task => task.projectID == projectID && task.location == location);
  }
  retrieveUserList() : User [] {
    return this.users;
  }

  retrieveUser(index: number): User {
    return this.users[index];
  }
  
}
