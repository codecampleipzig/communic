import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProjectCardComponent } from './explore-project-card.component';

describe('ExploreProjectCardComponent', () => {
  let component: ExploreProjectCardComponent;
  let fixture: ComponentFixture<ExploreProjectCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreProjectCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
