import { Injectable } from '@angular/core';
import { User } from './datatypes/User'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

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

  retrieveUser(index: number): User {
    return this.users[index];
  }
  
}
