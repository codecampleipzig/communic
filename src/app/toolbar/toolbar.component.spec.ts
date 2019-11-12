import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { Component } from '@angular/core';

// mock the child components
@Component({ selector: 'app-user-action', template: '', })
class UserActionStubComponent { }

// mock the child components
@Component({ selector: 'app-project-action', template: '', }) 
class ProjectActionStubComponent { }

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToolbarComponent,
        UserActionStubComponent,
        ProjectActionStubComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // verify home button is present
  it('should have home icon in a button tag', () => {
    const htmlElement : HTMLElement = fixture.nativeElement;
    expect(htmlElement.querySelector('.homeIcon')).toBeTruthy();
  });

  // TODO: verify home is clickable
  // Blocked by pending routing implementation 

  // verify project-action is present
  it('should have project-action tag', () => {
    const htmlElement = fixture.nativeElement
    expect(htmlElement.querySelector('[data-component="project-action"]')).toBeTruthy();
  });

  //verify user-action is present
  it('should have user-action tag', () => {
    const htmlElement : HTMLElement = fixture.nativeElement
    expect(htmlElement.querySelector('[data-component="user-action"]')).toBeTruthy();
  });
});
