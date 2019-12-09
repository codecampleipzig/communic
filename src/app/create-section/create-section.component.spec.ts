import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateSectionComponent } from "./create-section.component";
import { IconComponent } from "../icon/icon.component";
import * as Mock from "../mockdata";
import { StoreService } from "../store.service";
import { TestingStoreService } from "../test-utilities/testing-store.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("CreateSectionComponent", () => {
  let component: CreateSectionComponent;
  let fixture: ComponentFixture<CreateSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSectionComponent, IconComponent],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService,
        },
      ],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSectionComponent);
    component = fixture.componentInstance;

    component.project = Mock.projects[0];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
