import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskListComponent } from "./task-list.component";
import { TaskComponent } from "../task/task.component";
import { TaskTeamComponent } from "../task-team/task-team.component";

xdescribe("TaskListComponent", () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent, TaskComponent, TaskTeamComponent]
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
