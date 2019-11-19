import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskListComponent } from "./task-list.component";
import { TaskComponent } from "../task/task.component";

import { StoreService } from "../store.service";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { TaskListItemTeamComponent } from "../task-list-item-team/task-list-item-team.component";

xdescribe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TaskListComponent,
        TaskComponent,
        TaskListItemTeamComponent
      ],
      providers: [
        StoreService,
        {
          provide: Router,
          useClass: class {
            navigate() {}
          }
        },
        AuthService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
