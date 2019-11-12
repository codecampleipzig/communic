import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListComponent } from './task-list.component';
import { TaskComponent } from '../task/task.component';

import { StoreService } from '../store.service';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let storeService: StoreService;

  beforeEach(() => {
    storeService = new StoreService();
    component = new TaskListComponent(storeService);
  });

  afterEach(() => {
    storeService = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
