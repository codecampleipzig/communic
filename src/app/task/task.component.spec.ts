import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskComponent } from "./task.component";
import { TaskListItemTeamComponent } from "../task-list-item-team/task-list-item-team.component";
import * as Mock from "../mockdata";

describe("Task Component", () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent, TaskListItemTeamComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;

    /* Give it some mock data for a task */
    component.task = Mock.tasks[0];

    component.ngOnInit();
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
