import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { TaskListItemTeamComponent } from '../task-list-item-team/task-list-item-team.component';
import { By } from '@angular/platform-browser';

describe('Task Component', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskComponent, TaskListItemTeamComponent ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    
    /* Give it some mock data for a task */
    component.task = {
      id: 1,
      name: 'string',
      description: 'string',
      status: 'string',
      authorID: 1,
      userIDs: [1,2],
      projectID: 1,
      location: 'string'
     }
     
     component.ngOnInit()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change task.status to deleted after delete method is run', () => {
    component.delete();
    expect(component.task.status).toBe('deleted');
  });

  it('should change task.status to open after restore method is run', () => {
    component.restore();
    expect(component.task.status).toBe('open');
  });
 
});
