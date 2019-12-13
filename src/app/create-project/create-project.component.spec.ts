import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateProjectComponent } from "./create-project.component";
import { Component } from "@angular/core";
import * as Mock from "../mockdata";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TestingRouter } from "../test-utilities/testing-router";
import { Router } from "@angular/router";
import { StoreService } from "../store.service";
import { TestingStoreService } from "../test-utilities/testing-store.service";

@Component({
  selector: "app-toolbar",
  template: "",
})
class ToolbarStubComponent {}

describe("CreateProjectComponent", () => {
  let component: CreateProjectComponent;
  let fixture: ComponentFixture<CreateProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProjectComponent, ToolbarStubComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: Router,
          StoreService,
          useClass: TestingRouter,
          TestingStoreService,
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
