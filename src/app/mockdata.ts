import { User } from "./datatypes/User";
import { Task } from "./datatypes/Task";
import { Project } from "./datatypes/Project";

export const users: User[] = [
  {
    userId: 1,
    userName: "Mautzi",
    userEmail: "MolleMorallo@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 2,
    userName: "Mariana",
    userEmail: "BringMarianaBananaToSchool@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 3,
    userName: "Lena",
    userEmail: "lenintheempress@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 4,
    userName: "Björn",
    userEmail: "thPObutNotTheRiver@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 5,
    userName: "Pauline",
    userEmail: "DelphineQueen@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 6,
    userName: "Nick",
    userEmail: "nickTheSwan@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 7,
    userName: "Nico",
    userEmail: "intelligentButBeautiful@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 8,
    userName: "Simona",
    userEmail: "deepBeutifulSea@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 9,
    userName: "Beatriz",
    userEmail: "womanWhoRockTheWorld@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 10,
    userName: "Anahita",
    userEmail: "bestBiologistInTheWorld@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 11,
    userName: "Kaab",
    userEmail: "theCricketEnthusiast@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 12,
    userName: "Andres",
    userEmail: "krawalloAndi@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
  },
  {
    userId: 13,
    userName: "Iko",
    userEmail: "caretaker3000@gmail.com",
    userImageUrl: "../assets/user_avatar.png"
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
  },
  {
    taskId: 4,
    projectId: 1,
    taskTitle: "Some Task",
    taskDescription: "Not sure how important this task really is.",
    taskStatus: "deleted",
    taskCreator: users[6],
    taskTeam: [users[6], users[8], users[10]],
    menuSection: "main"
  },
  {
    taskId: 5,
    projectId: 1,
    taskTitle: "Some Task",
    taskDescription: "Not sure how important this task really is.",
    taskStatus: "open",
    taskCreator: users[6],
    taskTeam: [],
    menuSection: "main"
  },
  {
    taskId: 6,
    projectId: 4,
    taskTitle: "Research NGOs",
    taskDescription:
      "We need to find NGOs that have a certain tech-related problem that participants can solve. It doesn't have to be pureley tech but somehow tech-related.",
    taskStatus: "open",
    taskCreator: users[6],
    taskTeam: [users[6], users[8], users[10]],
    menuSection: "main"
  },
  {
    taskId: 7,
    projectId: 4,
    taskTitle: "Find Sponsors",
    taskDescription:
      "We need sponsors to give us money for paying the venue and get some prizes for the winners of certain categories. They also should have a strong connection to either Leipzig dev community or social",
    taskStatus: "open",
    taskCreator: users[6],
    taskTeam: [users[6], users[8], users[10]],
    menuSection: "main"
  },
  {
    taskId: 8,
    projectId: 4,
    taskTitle: "Find a venue",
    taskDescription:
      "We need to find a venue where we can host our Hackathon, possibilities would be Basislager, Urbn Jungle and Social Impact Lab. Venue should also be involved in Leipzig dev community",
    taskStatus: "open",
    taskCreator: users[6],
    taskTeam: [users[6], users[8], users[10]],
    menuSection: "main"
  }
];

export const projects: Project[] = [
  {
    projectId: 1,
    projectTitle: "Project A",
    projectImageUrl: "./../assets/project-default.png",
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
    projectTasks: [tasks[0], tasks[1], tasks[2], tasks[4]]
  },
  {
    projectId: 2,
    projectTitle: "Project B",
    projectImageUrl: "./../assets/project-default.png",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    projectGoal: "Save the world",
    projectStatus: "open",
    projectCreator: users[5],
    projectTeam: [users[5], users[6], users[8], users[10]],
    projectTasks: [tasks[2]]
  },
  {
    projectId: 3,
    projectTitle: "Project C",
    projectImageUrl: "./../assets/project-default.png",
    projectDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    projectGoal: "Save the world",
    projectStatus: "open",
    projectCreator: users[5],
    projectTeam: [users[5], users[6], users[8], users[10]],
    projectTasks: [tasks[2]]
  },
  {
    projectId: 4,
    projectTitle: "Hackolaus: A Hackathon for Social Good",
    projectImageUrl: "./../assets/hackolaus-twitter-share.jpg",
    projectDescription:
    "Many NGOs, associations and individuals also work hard to give to social, environmental or other sustainability causes. Attendees will form teams to build solutions for the non profit of their choice.",    projectGoal: "Please our stakeholders.",
    projectStatus: "open",
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
    projectTasks: [tasks[0], tasks[1], tasks[2], tasks[4]]
  },
];

// Class needed for testing, please do not remove
export class ExposeForTesting {
  public static projects: Project[] = projects;
}
