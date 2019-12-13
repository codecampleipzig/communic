import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NotFoundComponent } from "./not-found.component";
import { Component } from "@angular/core";
import { IconComponent } from "../icon/icon.component";
import { StoreService } from "../store.service";
import { TestingStoreService } from "../test-utilities/testing-store.service";
import { Router } from "@angular/router";
import { TestingRouter } from "../test-utilities/testing-router";

@Component({
  selector: "app-toolbar",
  template: "",
})
class ToolbarTestComponent {}

xdescribe("NotFoundComponent", () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent, ToolbarTestComponent, IconComponent],
      providers: [
        {
          provide: StoreService,
          useClass: TestingStoreService,
        },
        {
          provide: Router,
          useClass: TestingRouter,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
