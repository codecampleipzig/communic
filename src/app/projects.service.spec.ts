import { TestBed } from '@angular/core/testing';
import { Project } from './datatypes/Project';
import * as Mock from './mockdata';

import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectsService = TestBed.get(ProjectsService);
    expect(service).toBeTruthy();
  });


  test('retrieveYourProjects should return an array of projects where the user is member', () => {
    var expected: Project[] = [
      {
        id: 2,
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
        goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
        authorID: 1,
        userIDs: [1, 2, 3, 4],
        imageUrl: "./../assets/project-default.png"
      },
      {
        id: 3,
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
        goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
        authorID: 1,
        userIDs: [1, 2, 3, 4],
        imageUrl: "./../assets/project-default.png"
      }
    ];

    var notExpected: Project =
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
      goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
      authorID: 1,
      userIDs: [1234, 5678, 9123, 4567, 8901],
      imageUrl: "./../assets/project-default.png"
    };

    Mock.ExposeForTesting.projects = [];
    expected.forEach(element => Mock.ExposeForTesting.projects.push(element)); // concat does not work with empty array
    Mock.ExposeForTesting.projects.push(notExpected);

    const service: ProjectsService = TestBed.get(ProjectsService);

    service.retrieveYourProjects(1)
      .then(actual => expect(actual).toStrictEqual(expected))
      .catch(error => console.log(error));
  });

  test('retrieveExploreProjects should return an array of projects where the user is NOT member', () => {
    var expected: Project[] = [
      {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
        goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
        authorID: 1,
        userIDs: [1234, 5678, 9123, 4567, 8901],
        imageUrl: "./../assets/project-default.png"
      }
    ];

    var notExpected: Project[] = [
      {
        id: 2,
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
        goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
        authorID: 1,
        userIDs: [1, 2, 3, 4],
        imageUrl: "./../assets/project-default.png"
      },
      {
        id: 3,
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
        goal: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis aperiam, totam nemo magnam ab labore vitae natus tempora obcaecati fuga, consequatur odit autem nobis eius deserunt accusantium aspernatur. Placeat.',
        authorID: 1,
        userIDs: [1, 2, 3, 4],
        imageUrl: "./../assets/project-default.png"
      }
    ];

    Mock.ExposeForTesting.projects = [];
    expected.forEach(element => Mock.ExposeForTesting.projects.push(element)); // concat does not work with empty array
    Mock.ExposeForTesting.projects.concat(notExpected); // concat does work properly when array has some elements
    const service: ProjectsService = TestBed.get(ProjectsService);

    service.retrieveExploreProjects(1)
      .then(result => expect(result).toEqual(expected))
      .catch(error => console.log(error));

  });

});



