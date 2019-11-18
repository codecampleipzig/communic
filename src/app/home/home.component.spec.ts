import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './../toolbar/toolbar.component';
import { ProjectListComponent } from './../project-list/project-list.component';
import { ProjectActionComponent } from './../project-action/project-action.component';
import { UserActionComponent } from './../user-action/user-action.component';
import { ProjectCardComponent } from './../project-card/project-card.component';


import { HomeComponent } from './home.component';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ToolbarComponent, ProjectListComponent, ProjectActionComponent, UserActionComponent, ProjectCardComponent],
      providers: [
        {provide: Router, useClass: class {navigate() {}}},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
