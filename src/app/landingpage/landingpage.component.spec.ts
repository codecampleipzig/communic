import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LandingpageComponent } from "./landingpage.component";

xdescribe("LandingpageComponent", () => {
  let component: LandingpageComponent;
  let fixture: ComponentFixture<LandingpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingpageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
