import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ProjectActionComponent } from "./project-action.component";
import { Router } from "@angular/router";
import { TestingRouter } from "../test-utilities/testing-router";

describe("ProjectActionComponent", () => {
  let component: ProjectActionComponent;
  let fixture: ComponentFixture<ProjectActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectActionComponent],
      providers: [
        {
          provide: Router,
          useClass: TestingRouter
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // verify project name is present
  it("should have project name", () => {
    if (component.projectName) {
      const htmlElement: HTMLElement = fixture.nativeElement;
      expect(htmlElement.querySelector("#project-name .item")).toBeTruthy();
    }
  });

  // verify project name binding is correct
  it("should have correct project name", () => {
    if (component.projectName) {
      const htmlElement: HTMLElement = fixture.nativeElement;
      expect(
        htmlElement.querySelector("#project-name .item").textContent
      ).toEqual(component.projectName);
    }
  });

  // verify create project button is present
  it("should have create project button", () => {
    if (!component.projectName) {
      const htmlElement: HTMLElement = fixture.nativeElement;
      expect(htmlElement.querySelector("#start-project-button")).toBeTruthy();
    }
  });

  // verify create project button has correct label/text
  it("should have create project button", () => {
    if (!component.projectName) {
      const htmlElement: HTMLElement = fixture.nativeElement;
      expect(
        htmlElement.querySelector("#start-project-button span").textContent
      ).toEqual("Start a new project");
    }
  });

  // TODO: verify create project button is clickable?
  // Blocked by pending routing implementation

  // verify when project name is defined, create project button does not exist
  it("should NOT have create project button when project name is present", () => {
    component.projectName = "Project Name";
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
      expect(htmlElement.querySelector("#start-project-button")).toBeFalsy();
    });
  });

  // verify when project name is NOT defined, create project button exists
  // it('should have create project button when project name is NOT present', () => {
  //   if (!component.projectName) {
  //     const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
  //     expect(htmlElement.querySelector('#startProjectButton')).toBeTruthy();
  //   }
  // });

  it("should have create project button when project name is NOT present", () => {
    component.projectName = "";
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
      expect(htmlElement.querySelector("#start-project-button")).toBeTruthy();
    });
  });
});
