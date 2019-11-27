import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskTeamComponent } from "./task-team.component";
import * as Mock from "../mockdata";
import { StoreService } from "../store.service";
import { TestingStoreService } from "../test-utilities/testing-store.service";

describe("TaskTeam Component", () => {
  let component: TaskTeamComponent;
  let fixture: ComponentFixture<TaskTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskTeamComponent],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTeamComponent);
    component = fixture.componentInstance;

    /* Give it some mock data for a task */
    component.task = Mock.tasks[0];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
