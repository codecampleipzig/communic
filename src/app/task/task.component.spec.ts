import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TaskComponent } from "./task.component";
import { StoreService } from "../store.service";
import { TestingStoreService } from "../test-utilities/testing-store.service";
import * as Mock from "../mockdata";

describe("Task Component", () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;

    /* Give it some mock data */
    component.project = Mock.projects[0];
    component.task = Mock.tasks[0];

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
    const button = fixture.debugElement.nativeElement.querySelector("#task-delete");
    button.dispatchEvent(new Event("click"));
    expect(component.restore).toHaveBeenCalled();
  });

  it("should call delete method on click of delete button", () => {
    component.task.taskStatus = "open";
    fixture.detectChanges();
    spyOn(component, "delete");
    const button = fixture.debugElement.nativeElement.querySelector("#task-delete");
    button.dispatchEvent(new Event("click"));
    expect(component.delete).toHaveBeenCalled();
  });
});
