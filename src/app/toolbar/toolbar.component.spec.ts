import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ]
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

    // TRIAL
  // version from app.component.spec.ts
  // it('should render title in a h1 tag', () => {
  //   expect.assertions(1);
  //   return TestBed.compileComponents()
  //     .then( () => {
  //     const fixture = TestBed.createComponent(AppComponent);
  //     fixture.detectChanges();
  //     const compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelector('h1').textContent).toContain('Welcome to communic!');
  //     });
  //   });
  // version from app.component.spec.ts

  it('should have home icon in a button tag', () => {
    const htmlElement = fixture.debugElement.nativeElement
    expect(htmlElement.querySelector('button')).toBeTruthy();
  });

});
