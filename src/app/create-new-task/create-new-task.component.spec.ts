import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CreateNewTaskComponent } from "./create-new-task.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("CreateNewTaskComponent", () => {
  let component: CreateNewTaskComponent;
  let fixture: ComponentFixture<CreateNewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [
      CreateNewTaskComponent,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
