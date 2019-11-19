import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { RegisterCardComponent } from "./register-card.component";
import { SignupFormComponent } from "../signup-form/signup-form.component";

xdescribe("RegisterCardComponent", () => {
  let component: RegisterCardComponent;
  let fixture: ComponentFixture<RegisterCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCardComponent, SignupFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
