import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StartnewprojectComponent } from "./startnewproject.component";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TestingRouter } from "../test-utilities/testing-router";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  template: "",
})
class ToolbarStubComponent {}

describe("StartnewprojectComponent", () => {
  let component: StartnewprojectComponent;
  let fixture: ComponentFixture<StartnewprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartnewprojectComponent, ToolbarStubComponent],
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
    fixture = TestBed.createComponent(StartnewprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
