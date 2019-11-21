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
    component.task = {
      taskId: 3,
      projectId: 2,
      taskTitle: "A really important task",
      taskDescription: "Not sure how important this task really is.",
      taskStatus: "deleted",
      taskCreator: {
        userId: 13,
        userName: "Iko",
        userEmail: "caretaker3000@gmail.com",
        userImageURL: "../assets/user_avatar.png"
      },
      taskTeam: [
        {
          userId: 13,
          userName: "Iko",
          userEmail: "caretaker3000@gmail.com",
          userImageURL: "../assets/user_avatar.png"
        },
        {
          userId: 13,
          userName: "Iko",
          userEmail: "caretaker3000@gmail.com",
          userImageURL: "../assets/user_avatar.png"
        }
      ],
      menuSection: "main"
    };

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
