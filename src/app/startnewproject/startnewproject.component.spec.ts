import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartnewprojectComponent } from './startnewproject.component';

describe('StartnewprojectComponent', () => {
  let component: StartnewprojectComponent;
  let fixture: ComponentFixture<StartnewprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartnewprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartnewprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
