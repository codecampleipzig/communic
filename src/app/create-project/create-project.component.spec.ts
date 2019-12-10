import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateProjectComponent } from "./create-project.component";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TestingRouter } from "../test-utilities/testing-router";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  template: "",
})
class ToolbarStubComponent {}

xdescribe("CreateProjectComponent", () => {
  let component: CreateProjectComponent;
  let fixture: ComponentFixture<CreateProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProjectComponent, ToolbarStubComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: Router,
          useClass: TestingRouter,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
