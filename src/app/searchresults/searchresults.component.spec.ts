import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchresultsComponent } from "./searchresults.component";
import { ActivatedRoute } from "@angular/router";
import { SearchService } from "../search.service";
import { Observable } from "rxjs";
import { Component, Input } from "@angular/core";

@Component({ selector: "app-toolbar", template: "" })
class ToolbarStubComponent {}

@Component({ selector: "app-project-list", template: "" })
class ProjectListStubComponent {
  @Input() title: any;
  @Input() projects: Array<any>;
}

describe("SearchresultsComponent", () => {
  let component: SearchresultsComponent;
  let fixture: ComponentFixture<SearchresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchresultsComponent, ToolbarStubComponent, ProjectListStubComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: class {
            queryParams = new Observable(() => {});
            snapshot = {
              queryParams: new Observable(() => {}),
            };
          },
        },
        {
          provide: SearchService,
          useClass: class {
            getResults(searchString: string) {
              return new Observable(() => {});
            }
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
