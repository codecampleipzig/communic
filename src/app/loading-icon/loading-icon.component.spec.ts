import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoadingIconComponent } from "./loading-icon.component";
import { TestingStoreService } from "../test-utilities/testing-store.service";
import { StoreService } from "../store.service";

describe("LoadingIconComponent", () => {
  let component: LoadingIconComponent;
  let fixture: ComponentFixture<LoadingIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService,
        },
      ],
      declarations: [LoadingIconComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
