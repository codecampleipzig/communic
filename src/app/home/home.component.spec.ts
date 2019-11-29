import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HomeComponent } from "./home.component";
import { Component, Input } from "@angular/core";
import { TestingStoreService } from "../test-utilities/testing-store.service";
import { StoreService } from "../store.service";

@Component({ selector: "app-toolbar", template: "" })
class ToolbarStubComponent {}

@Component({ selector: "app-project-list", template: "" })
class ProjectListStubComponent {
  @Input() title;
  @Input() projects;
}

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ToolbarStubComponent, ProjectListStubComponent],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
