import { Component, OnInit, HostBinding, Inject, Input, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { StoreService } from "../store.service";
import { Project } from "../datatypes/Project";
import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"],
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  public project: Project;

  /**
   * Add CSS Class .card to the Host
   */
  @HostBinding("class")
  get hostClasses(): string {
    return "card";
  }

  public projectTitle;

  constructor(@Inject(Router) public router: Router, @Inject(StoreService) public store: StoreService) {
    store.project$.subscribe(project => (this.project = project));
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, "scroll").pipe(throttleTime(10));
  }
}
