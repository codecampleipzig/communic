import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTeaserComponent } from './project-teaser.component';

describe('ProjectTeaserComponent', () => {
  let component: ProjectTeaserComponent;
  let fixture: ComponentFixture<ProjectTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
