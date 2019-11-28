import { TestBed } from "@angular/core/testing";
import { Project } from "./datatypes/Project";
import * as Mock from "./mockdata";

import { ProjectsService } from "./projects.service";

describe("ProjectsService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  xit("should be created", () => {
    const service: ProjectsService = TestBed.get(ProjectsService);
    expect(service).toBeTruthy();
  });

  xtest("retrieveYourProjects should return an array of projects where the user is member", done => {
    const expected: Project[] = [
      {
        projectId: 2,
        projectTitle: "Project 2",
        projectDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
        projectGoal:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
        projectCreator: Mock.users[0],
        projectTeam: [
          Mock.users[0],
          Mock.users[1],
          Mock.users[2],
          Mock.users[3]
        ],
        projectImageUrl: "./../assets/project-default.png",
        projectTasks: [],
        projectStatus: "open"
      },
      {
        projectId: 3,
        projectTitle: "Project 3",
        projectDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
        projectGoal:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
        projectCreator: Mock.users[1],
        projectTeam: [
          Mock.users[1],
          Mock.users[2],
          Mock.users[3],
          Mock.users[4]
        ],
        projectImageUrl: "./../assets/project-default.png",
        projectTasks: [],
        projectStatus: "open"
      }
    ];

    const notExpected: Project = {
      projectId: 1,
      projectTitle: "Project 1",
      projectDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
      projectGoal:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
      projectCreator: Mock.users[3],
      projectTeam: [Mock.users[4], Mock.users[5], Mock.users[6]],
      projectImageUrl: "./../assets/project-default.png",
      projectTasks: [],
      projectStatus: "open"
    };

    Mock.ExposeForTesting.projects = [];
    expected.forEach(element => Mock.ExposeForTesting.projects.push(element)); // concat does not work with empty array
    Mock.ExposeForTesting.projects.push(notExpected);

    const service: ProjectsService = TestBed.get(ProjectsService);

    service
      .retrieveYourProjects(Mock.users[1].userId)
      .then(actual => expect(actual).toStrictEqual(expected))
      .catch(result => done.fail(result));
  });

  xtest("retrieveExploreProjects should return an array of projects where the user is NOT member", done => {
    const expected: Project[] = [
      {
        projectId: 1,
        projectTitle: "Project 1",
        projectDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
        projectGoal:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
        projectCreator: Mock.users[1],
        projectTeam: [
          Mock.users[1],
          Mock.users[2],
          Mock.users[3],
          Mock.users[4],
          Mock.users[5]
        ],
        projectImageUrl: "./../assets/project-default.png",
        projectTasks: [],
        projectStatus: "open"
      }
    ];

    const notExpected: Project[] = [
      {
        projectId: 2,
        projectTitle: "Project 2",
        projectDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
        projectGoal:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
        projectCreator: Mock.users[6],
        projectTeam: [Mock.users[2], Mock.users[3], Mock.users[4]],
        projectImageUrl: "./../assets/project-default.png",
        projectStatus: "open",
        projectTasks: []
      },
      {
        projectId: 3,
        projectTitle: "Project 3",
        projectDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
        projectGoal:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.",
        projectCreator: Mock.users[3],
        projectTeam: [
          Mock.users[2],
          Mock.users[4],
          Mock.users[5],
          Mock.users[6]
        ],
        projectImageUrl: "./../assets/project-default.png",
        projectTasks: [],
        projectStatus: "open"
      }
    ];

    Mock.ExposeForTesting.projects = [];
    expected.forEach(element => Mock.ExposeForTesting.projects.push(element)); // concat does not work with empty array
    Mock.ExposeForTesting.projects.concat(notExpected); // concat does work properly when array has some elements
    const service: ProjectsService = TestBed.get(ProjectsService);

    service
      .retrieveExploreProjects(Mock.users[1].userId)
      .then(result => {
        expect(result).toEqual(expected);
        done();
      })
      .catch(result => done.fail(result));
  });
});
