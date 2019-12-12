import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ToolbarComponent } from "./toolbar.component";
import { Component, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { TestingRouter } from "../test-utilities/testing-router";
import { Project } from "../datatypes/Project";
import { IconComponent } from "../icon/icon.component";
import { fromEvent } from "rxjs";
import { throttleTime, map, pairwise, distinctUntilChanged, share, filter } from "rxjs/operators";
import { trigger, state, transition, animate, style } from "@angular/animations";

// mock the child components
@Component({ selector: "app-user-action", template: "" })
class UserActionStubComponent {}

// mock the child components
@Component({ selector: "app-project-action", template: "" })
class ProjectActionStubComponent {
  @Input() project: Project;
}

// mock the child components
@Component({ selector: "app-searchtool", template: "" })
class SearchToolStubComponent {}

describe("ToolbarComponent", () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        UserActionStubComponent,
        ProjectActionStubComponent,
        SearchToolStubComponent,
        IconComponent,
        fromEvent,
        throttleTime,
        map,
        pairwise,
        distinctUntilChanged,
        share,
        filter,
        trigger,
        state,
        transition,
        animate,
        style,
      ],
      providers: [
        {
          provide: Router,
          useClass: TestingRouter,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit("should create", () => {
    expect(component).toBeTruthy();
  });

  // verify home button is present
  xit("should have home icon in a button tag", () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement.querySelector(".home")).toBeTruthy();
  });

  // TODO: verify home is clickable
  // Blocked by pending routing implementation

  // verify project-action is present
  xit("should have project-action tag", () => {
    const htmlElement = fixture.nativeElement;
    expect(htmlElement.querySelector("#project-action")).toBeTruthy();
  });

  // verify user-action is present
  xit("should have user-action tag", () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    expect(htmlElement.querySelector("#user-action")).toBeTruthy();
  });
});
