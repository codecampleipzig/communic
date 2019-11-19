import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageComponent } from './project-page.component';
import { ProjectTeaserComponent } from '../project-teaser/project-teaser.component';
import { TeamCardComponent } from '../team-card/team-card.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { CreateNewTaskComponent } from '../create-new-task/create-new-task.component';

describe('ProjectPageComponent', () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPageComponent, ProjectTeaserComponent, TeamCardComponent, TaskListComponent, CreateNewTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPageComponent);
    component = fixture.componentInstance;

    /**
     * Setup Mockdata
     */
    component.project = {
      projectId: 1,
      projectTitle: 'Project A',
      projectImageURL: './../assets/project-default.png',
      projectDescription: 'An absolute stunner of a project, uniting half the globe. And now some junk text, to look like a full paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut consequat semper viverra nam libero justo laoreet sit. Sed sed risus pretium quam. Nisl purus in mollis nunc sed id semper risus. Cras fermentum odio eu feugiat pretium nibh. Hac habitasse platea dictumst vestibulum. Sit amet nisl suscipit adipiscing bibendum est. Amet aliquam id diam maecenas.',
      projectGoal: 'Please our stakeholders.',
      projectStatus: 'done',
      projectCreator: {userId: 13, userName: "Iko", userEmail: "caretaker3000@gmail.com", userImageURL: "../assets/user_avatar.png"},
      projectTeam: [{userId: 13, userName: "Iko", userEmail: "caretaker3000@gmail.com", userImageURL: "../assets/user_avatar.png"}],
      projectTasks: [{
        taskId: 1,
        projectId: 1,
        taskTitle: 'Our first task',
        taskDescription: 'Recruit some team members. And here some more, to fill up your page: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        taskStatus: 'open',
        taskCreator: {userId: 13, userName: "Iko", userEmail: "caretaker3000@gmail.com", userImageURL: "../assets/user_avatar.png"},
        taskTeam: [{userId: 13, userName: "Iko", userEmail: "caretaker3000@gmail.com", userImageURL: "../assets/user_avatar.png"}],
        menuSection: 'starter'
     }]
   }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
