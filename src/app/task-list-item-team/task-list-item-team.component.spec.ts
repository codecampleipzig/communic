import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListItemTeamComponent } from './task-list-item-team.component';

describe('TaskListItemTeamComponent', () => {
  let component: TaskListItemTeamComponent;
  let fixture: ComponentFixture<TaskListItemTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListItemTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListItemTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
