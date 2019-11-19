import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectPageComponent } from './project-page.component';
import { ProjectTeaserComponent } from '../project-teaser/project-teaser.component';
import { TeamCardComponent } from '../team-card/team-card.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { CreateNewTaskComponent } from '../create-new-task/create-new-task.component';

xdescribe("ProjectPageComponent", () => {
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
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
