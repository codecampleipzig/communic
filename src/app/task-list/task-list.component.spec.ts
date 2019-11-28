import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskListComponent } from "./task-list.component";
import { TaskComponent } from "../task/task.component";
import { CreateNewTaskComponent } from "../create-new-task/create-new-task.component";

import * as Mock from "../mockdata";
import { StoreService } from "../store.service";
import { TestingStoreService } from "../test-utilities/testing-store.service";

describe("TaskListComponent", () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent, TaskComponent, CreateNewTaskComponent],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;

    /* Give it some mock data */
    component.project = Mock.projects[0];

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
