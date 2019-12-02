import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchtoolComponent } from "./searchtool.component";
import { IconComponent } from "../icon/icon.component";
import { Router, ActivatedRoute } from "@angular/router";
import { TestingRouter } from "../test-utilities/testing-router";
import { SearchService } from "../search.service";
import { Observable } from "rxjs/internal/Observable";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { Component } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";

// mock the child components
@Component({ selector: "app-searchresults", template: "" })
class SearchResultsStubComponent {}

describe("SearchtoolComponent", () => {
  let component: SearchtoolComponent;
  let fixture: ComponentFixture<SearchtoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchtoolComponent, IconComponent, SearchResultsStubComponent],
      providers: [
        { provide: Router, useClass: TestingRouter },
        { provide: ActivatedRoute, useClass: class {} },
        {
          provide: SearchService,
          useClass: class {
            getResults(searchString: string) {
              return new Observable(() => {});
            }
          },
        },
      ],
      imports: [ReactiveFormsModule, RouterTestingModule, FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
