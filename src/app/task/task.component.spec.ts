import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TaskComponent } from "./task.component";
import { TaskListItemTeamComponent } from "../task-list-item-team/task-list-item-team.component";
import { StoreService } from "../store.service";
import { TestingStoreService } from "../test-utilities/testing-store.service";

describe("Task Component", () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent, TaskListItemTeamComponent],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService
        }
      ]
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
      taskStatus: "done",
      taskCreator: {
        userId: 13,
        userName: "Iko",
        userEmail: "caretaker3000@gmail.com",
        userImageUrl: "../assets/user_avatar.png"
      },
      taskTeam: [
        {
          userId: 2,
          userName: "Iko",
          userEmail: "caretaker3000@gmail.com",
          userImageUrl: "../assets/user_avatar.png"
        },
        {
          userId: 14,
          userName: "Iko",
          userEmail: "caretaker3000@gmail.com",
          userImageUrl: "../assets/user_avatar.png"
        }
      ],
      menuSection: "main"
    };

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should change task.status to deleted after delete method is run", () => {
    component.delete();
    expect(component.task.taskStatus).toBe("deleted");
  });

  it("should change task.status to open after restore method is run", () => {
    component.restore();
    expect(component.task.taskStatus).toBe("open");
  });

  it("should call restore method on click of restore button", () => {
    component.task.taskStatus = "deleted";
    fixture.detectChanges();
    spyOn(component, "restore");
    const button = fixture.debugElement.nativeElement.querySelector(
      ".task-delete i"
    );
    button.dispatchEvent(new Event("click"));
    expect(component.restore).toHaveBeenCalled();
  });

  it("should call delete method on click of delete button", () => {
    component.task.taskStatus = "open";
    fixture.detectChanges();
    spyOn(component, "delete");
    const button = fixture.debugElement.nativeElement.querySelector(
      ".task-delete i"
    );
    button.dispatchEvent(new Event("click"));
    expect(component.delete).toHaveBeenCalled();
  });
});
