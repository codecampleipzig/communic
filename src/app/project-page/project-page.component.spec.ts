import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectPageComponent } from "./project-page.component";
import { ProjectTeaserComponent } from "../project-teaser/project-teaser.component";
import { TeamCardComponent } from "../team-card/team-card.component";
import { CreateNewTaskComponent } from "../create-new-task/create-new-task.component";
import { StoreService } from "../store.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { TeamMemberComponent } from "../team-member/team-member.component";
import { TaskComponent } from "../task/task.component";
import { Component } from "@angular/core";
import { TestingStoreService } from "../test-utilities/testing-store.service";
import { FormsModule } from "@angular/forms";
import { ProjectSectionsComponent } from "../project-sections/project-sections.component";
import { CreateSectionComponent } from "../create-section/create-section.component";
import { IconComponent } from "../icon/icon.component";

@Component({
  selector: "app-toolbar",
  template: "",
})
class ToolbarTestComponent {}

xdescribe("ProjectPageComponent", () => {
  let component: ProjectPageComponent;
  let fixture: ComponentFixture<ProjectPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectPageComponent,
        ProjectTeaserComponent,
        TeamCardComponent,
        ProjectSectionsComponent,
        CreateSectionComponent,
        CreateNewTaskComponent,
        TeamMemberComponent,
        TaskComponent,
        ToolbarTestComponent,
        IconComponent,
      ],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService,
        },
        {
          provide: Router,
          useClass: class {
            navigate() {}
          },
        },
        {
          provide: ActivatedRoute,
          useClass: class {
            params = new BehaviorSubject<any>({ id: 1 }).asObservable();
          },
        },
      ],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
