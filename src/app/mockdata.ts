import { Task } from './datatypes/Task';
import { Project } from './datatypes/Project';
import { User } from './datatypes/User';

export const tasks: Task[] = [
  {
    id: 1,
    name: 'Some Task Name Placeholder',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
    status: 'open',
    authorID: 1,
    userIDs: [1234, 5678, 9123, 4567, 8901],
    projectID: 9435,
    location: 'starter'
  },
  {
    id: 2,
    name: 'Some Other Task Name Placeholder',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    status: 'open',
    authorID: 1235,
    userIDs: [1235, 5678, 9123, 4567, 8901],
    projectID: 9435,
    location: 'starter'
  },
  {
    id: 3,
    name: 'Some Task',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    status: 'done',
    authorID: 1237,
    userIDs: [1237, 5678, 9123, 4567, 8901],
    projectID: 9435,
    location: 'starter'
  },
  {
    id: 4,
    name: 'Some Task',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    status: 'deleted',
    authorID: 1237,
    userIDs: [1237, 5678, 9123, 4567, 8901],
    projectID: 9435,
    location: 'starter'
  },
];
export const projects: Project[] = [
  {
    id: 9435,
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
    goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
    authorID: 1,
    userIDs: [1234, 5678, 9123, 4567, 8901],
  },
]
export const users: User[] = [
  { userName: "Mautzi", userEmail: "MoralloMolle@gmail.com", imageURL: "../assets/mock-user.png", userId: 1 },
  { userName: "Mariana", userEmail: "bringMarianaBanansToSchool@gmail.com", imageURL: "../assets/mock-user.png", userId: 2 },
  { userName: "Lena", userEmail: "lenintheempress@gmail.com", imageURL: "../assets/mock-user.png", userId: 3 },
  { userName: "Björn", userEmail: "thPObutNotTheRiver@gmail.com", imageURL: "../assets/mock-user.png", userId: 4 },
  { userName: "Pauline", userEmail: "DelphineQueen@gmail.com", imageURL: "../assets/mock-user.png", userId: 5 },
  { userName: "Nick", userEmail: "nickTheSwan@gmail.com", imageURL: "../assets/mock-user.png", userId: 6 },
  { userName: "Nico", userEmail: "intelligentButBeautiful@gmail.com", imageURL: "../assets/mock-user.png", userId: 7 },
  { userName: "Simona", userEmail: "deepBeutifulSea@gmail.com", imageURL: "../assets/mock-user.png", userId: 8 },
  { userName: "Beatriz", userEmail: "womanWhoRockTheWorld@gmail.com", imageURL: "../assets/mock-user.png", userId: 9 },
  { userName: "Anahita", userEmail: "bestBiologistInTheWorld@gmail.com", imageURL: "../assets/mock-user.png", userId: 10 },
  { userName: "Kaab", userEmail: "theKricketEnthusiast@gmail.com", imageURL: "../assets/mock-user.png", userId: 11 },
  { userName: "Andres", userEmail: "krawalloAndi@gmail.com", imageURL: "../assets/mock-user.png", userId: 12 },
  { userName: "Iko", userEmail: "caretaker3000@gmail.com", imageURL: "../assets/mock-user.png", userId: 12 },
];
