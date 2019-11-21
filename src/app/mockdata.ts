import { User } from "./datatypes/User";
import { Task } from "./datatypes/Task";
import { Project } from "./datatypes/Project";

export const users: User[] = [
  {
    userId: 1,
    userName: "Mautzi",
    userEmail: "MolleMorallo@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 2,
    userName: "Mariana",
    userEmail: "BringMarianaBananaToSchool@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 3,
    userName: "Lena",
    userEmail: "lenintheempress@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 4,
    userName: "Björn",
    userEmail: "thPObutNotTheRiver@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 5,
    userName: "Pauline",
    userEmail: "DelphineQueen@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 6,
    userName: "Nick",
    userEmail: "nickTheSwan@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 7,
    userName: "Nico",
    userEmail: "intelligentButBeautiful@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 8,
    userName: "Simona",
    userEmail: "deepBeutifulSea@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 9,
    userName: "Beatriz",
    userEmail: "womanWhoRockTheWorld@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 10,
    userName: "Anahita",
    userEmail: "bestBiologistInTheWorld@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 11,
    userName: "Kaab",
    userEmail: "theCricketEnthusiast@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 12,
    userName: "Andres",
    userEmail: "krawalloAndi@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  },
  {
    userId: 13,
    userName: "Iko",
    userEmail: "caretaker3000@gmail.com",
    userImageURL: "../assets/user_avatar.png"
  }
];

export const tasks: Task[] = [
  {
    taskId: 1,
    projectId: 1,
    taskTitle: "Our first task",
    taskDescription:
      "Recruit some team members. And here some more, to fill up your page: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    taskStatus: "open",
    taskCreator: users[1],
    taskTeam: [users[1], users[2], users[4]],
    menuSection: "starter"
  },
  {
    taskId: 2,
    projectId: 1,
    taskTitle: "Our second task",
    taskDescription: "Get rid of half the team members.",
    taskStatus: "done",
    taskCreator: users[3],
    taskTeam: [users[3], users[5], users[12]],
    menuSection: "main"
  },
  {
    taskId: 3,
    projectId: 2,
    taskTitle: "A really important task",
    taskDescription: "Not sure how important this task really is.",
    taskStatus: "deleted",
    taskCreator: users[6],
    taskTeam: [users[6], users[8], users[10]],
    menuSection: "main"
  }
];

export const projects: Project[] = [
  {
    projectId: 1,
    projectTitle: "Project A",
    projectImageURL: "./../assets/project-default.png",
    projectDescription:
      "An absolute stunner of a project, uniting half the globe. And now some junk text, to look like a full paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo laoreet sit. Sed sed risus pretium quam. Nisl purus in mollis nunc sed id semper risus. Cras fermentum odio eu feugiat pretium nibh. Hac habitasse platea dictumst vestibulum. Sit amet nisl suscipit adipiscing bibendum est. Amet aliquam id diam maecenas.",
    projectGoal: "Please our stakeholders.",
    projectStatus: "done",
    projectCreator: users[1],
    projectTeam: [
      users[1],
      users[2],
      users[3],
      users[4],
      users[5],
      users[10],
      users[12]
    ],
    projectTasks: [tasks[1], tasks[2]]
  },
  {
    projectId: 2,
    projectTitle: "Project B",
    projectImageURL: "./../assets/project-default.png",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    projectGoal: "Save the world",
    projectStatus: "open",
    projectCreator: users[5],
    projectTeam: [users[5], users[6], users[8], users[10]],
    projectTasks: [tasks[3]]
  },
  {
    projectId: 3,
    projectTitle: "Project C",
    projectImageURL: "./../assets/project-default.png",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    projectGoal: "Save the world",
    projectStatus: "open",
    projectCreator: users[5],
    projectTeam: [users[5], users[6], users[8], users[10]],
    projectTasks: [tasks[3]]
  }
];
