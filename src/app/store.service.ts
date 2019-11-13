import { Injectable } from '@angular/core';
import { Task } from './datatypes/Task';
import { Project } from './datatypes/Project';
import { User } from './datatypes/User'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  /**
   * Mock Data for Tasks & Projects & Users
   */
  private TASKS: Task[] = [
    { id: 1,
      name: 'Some Task Name Placeholder',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
      status: 'open',
      authorID: 1234,
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
      authorID: 5678,
      userIDs: [1234, 5678, 9123, 4567, 8901],
    },
  ];

  private users : User[] = [
    { userName : "Mautzi", userEmail : "mauziDong@gmail.com", imageURL : "../assets/mock-user.png", userId: 1234},
    { userName : "Mariana", userEmail : "marianaTheFrontEndGodess@gmail.com", imageURL : "../assets/mock-user.png", userId: 5678},
    { userName : "Lena", userEmail : "lenintheempress@gmail.com", imageURL : "../assets/mock-user.png", userId: 9123},
    { userName : "Björn", userEmail : "thPObutNotTheRiver@gmail.com", imageURL : "../assets/mock-user.png", userId: 4567},
    { userName : "Pauline", userEmail : "DelphineQueen@gmail.com", imageURL : "../assets/mock-user.png", userId: 8901},
    { userName : "Nick", userEmail : "nickTheSwan@gmail.com", imageURL : "../assets/mock-user.png", userId: 1237},
    { userName : "Nico", userEmail : "intelligentButBeautiful@gmail.com", imageURL : "../assets/mock-user.png", userId: 2345},
    { userName : "Simona", userEmail : "deepBeutifulSea@gmail.com", imageURL : "../assets/mock-user.png", userId: 6789},
    { userName : "Beatriz", userEmail : "womanWhoRockTheWorld@gmail.com", imageURL : "../assets/mock-user.png", userId: 3456},
    { userName : "Anahita", userEmail : "bestBiologistInTheWorld@gmail.com", imageURL : "../assets/mock-user.png", userId: 7891},
    { userName : "Kaab", userEmail : "theKricketEnthusiast@gmail.com", imageURL : "../assets/mock-user.png", userId: 4567},
    { userName : "Andres", userEmail : "krawalloAndi@gmail.com", imageURL : "../assets/mock-user.png", userId: 8912},
    { userName : "Iko", userEmail : "caretaker3000@gmail.com", imageURL : "../assets/mock-user.png", userId: 1239},
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
