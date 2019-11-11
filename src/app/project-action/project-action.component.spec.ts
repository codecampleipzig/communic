import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectActionComponent } from './project-action.component';

describe('ProjectActionComponent', () => {
  let component: ProjectActionComponent;
  let fixture: ComponentFixture<ProjectActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectActionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // verify project name is present
  it('should have project name', () => {
    if (component.projectName) {
      const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
      expect(htmlElement.querySelector('#projectName')).toBeTruthy();
    }
  });

  // verify project name is correct?
  it('should have correct project name', () => {
    const expectedValue = component.projectName;
    if (expectedValue) {
      const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
      const actualValue = htmlElement.querySelector('#projectName').textContent;
      expect(actualValue).toBe(expectedValue);
    }
  });

  // verify create project button is present
  it('should have create project button', () => {
    if (!component.projectName) {
      const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
      expect(htmlElement.querySelector('#startProjectButton')).toBeTruthy();
    }
  });

  // verify create project button has correct label/text?
  it('should have create project button', () => {
    if (!component.projectName) {
      const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
      expect(htmlElement.querySelector('#startProjectButton').textContent).toBe('Start a new project');
    }
  });

  // TODO: verify create project button is clickable?
  // Blocked by pending routing implementation 

  // verify when project name is defined, create project button does not exist
  it('should have create project button', () => {
    if (component.projectName) {
      const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
      expect(htmlElement.querySelector('#startProjectButton')).toBeFalsy();
    }
  });

  // verify when project name is NOT defined, create project button exists
  it('should have create project button', () => {
    if (!component.projectName) {
      const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
      expect(htmlElement.querySelector('#startProjectButton')).toBeTruthy();
    }
  });
});
