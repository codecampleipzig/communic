import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectPageComponent } from "./project-page.component";
import { ProjectTeaserComponent } from "../project-teaser/project-teaser.component";
import { TeamCardComponent } from "../team-card/team-card.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { CreateNewTaskComponent } from "../create-new-task/create-new-task.component";
import { StoreService } from "../store.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { TeamMemberComponent } from "../team-member/team-member.component";
import { TaskComponent } from "../task/task.component";
import { Component } from "@angular/core";
import { TaskTeamComponent } from "../task-team/task-team.component";
import { TestingStoreService } from "../test-utilities/testing-store.service";

@Component({
  selector: "app-toolbar",
  template: ""
})
class ToolbarTestComponent {}

describe("ProjectPageComponent", () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectPageComponent,
        ProjectTeaserComponent,
        TeamCardComponent,
        TaskListComponent,
        CreateNewTaskComponent,
        TeamMemberComponent,
        TaskComponent,
        ToolbarTestComponent,
        TaskTeamComponent
      ],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService
        },
        {
          provide: Router,
          useClass: class {
            navigate() {}
          }
        },
        {
          provide: ActivatedRoute,
          useClass: class {
            params = new BehaviorSubject<any>({ id: 1 }).asObservable();
          }
        }
      ]
    }).compileComponents();
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
