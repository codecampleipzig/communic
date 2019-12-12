import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectSectionsComponent } from "./project-sections.component";
import { StoreService } from "../store.service";
import { TestingStoreService } from "../test-utilities/testing-store.service";
import { TaskComponent } from "../task/task.component";
import { CreateNewTaskComponent } from "../create-new-task/create-new-task.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import * as Mock from "../mockdata";

describe("ProjectSectionsComponent", () => {
  let component: ProjectSectionsComponent;
  let fixture: ComponentFixture<ProjectSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectSectionsComponent, TaskComponent, CreateNewTaskComponent],
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
    fixture = TestBed.createComponent(ProjectSectionsComponent);
    component = fixture.componentInstance;

    /* Give it some mock data */
    component.project = Mock.projects[0];
    component.section = component.project.projectSections[0];

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
