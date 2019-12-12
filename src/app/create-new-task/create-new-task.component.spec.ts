import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateNewTaskComponent } from "./create-new-task.component";
import { TestingStoreService } from "../test-utilities/testing-store.service";
import { StoreService } from "../store.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("CreateNewTaskComponent", () => {
  let component: CreateNewTaskComponent;
  let fixture: ComponentFixture<CreateNewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewTaskComponent],
      providers: [{ provide: StoreService, useClass: TestingStoreService }],
      imports: [FormsModule, ReactiveFormsModule],
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
