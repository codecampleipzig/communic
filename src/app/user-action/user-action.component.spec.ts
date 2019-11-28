import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserActionComponent } from "./user-action.component";
import { StoreService } from "../store.service";
import { TestingStoreService } from "../test-utilities/testing-store.service";

describe("UserActionComponent", () => {
  let component: UserActionComponent;
  let fixture: ComponentFixture<UserActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserActionComponent],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // verify username is present
  it("should have username", () => {
    const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
    expect(htmlElement.querySelector(".user-name")).toBeTruthy();
  });

  // verify correct username is present
  it("should have correct username", () => {
    const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
    expect(htmlElement.querySelector(".user-name").textContent).toBe(component.userName);
  });

  // verify user thumbnail is present
  it("should have user thumbnail", () => {
    const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
    expect(htmlElement.querySelector(".user-image")).toBeTruthy();
  });

  // verify correct thumbnail is present
  xit("should have correct username", () => {
    const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
    const imgElement: HTMLImageElement = htmlElement.querySelector(".user-image img");
    // TODO: use regex or find another way (localhost is the problem)
    // should not be a problem with real url
    const expectedValue = component.userThumbnail.replace("../", "").replace("../", "");
    expect(imgElement.src).toBe(`http://localhost/${expectedValue}`);
  });

  // verify logout button is present
  it("should have logout button", () => {
    const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
    expect(htmlElement.querySelector(".logout")).toBeTruthy();
  });

  // verify logout button has correct label/text
  it("should have correct logout button text", () => {
    const htmlElement: HTMLElement = fixture.debugElement.nativeElement;
    expect(htmlElement.querySelector(".logout").textContent).toBe("Logout");
  });

  // TODO: verify logout button is clickable
  // Blocked by pending routing implementation
});
