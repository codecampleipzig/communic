import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchtoolComponent } from "./searchtool.component";
import { IconComponent } from "../icon/icon.component";

describe("SearchtoolComponent", () => {
  let component: SearchtoolComponent;
  let fixture: ComponentFixture<SearchtoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchtoolComponent, IconComponent],
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
