import { DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

// mock the child components
@Component({ selector: 'app-toolbar', template: '' })
class ToolbarStubComponent { }

xdescribe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ToolbarStubComponent
      ],
    });
  });

  it('should create the app', () => {
    expect.assertions(1);
    return TestBed.compileComponents()
      .then(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      });
  });

  it(`should have as title 'communic'`, () => {
    expect.assertions(1);
    return TestBed.compileComponents()
      .then(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('communic');
      });
  });

  it('should render title in a h1 tag', () => {
    expect.assertions(1);
    return TestBed.compileComponents()
      .then(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to communic!');
      });
  });
});
