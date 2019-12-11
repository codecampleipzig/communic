import { Component, OnInit, HostBinding, Inject, Input, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { StoreService } from "../store.service";
import { Project } from "../datatypes/Project";
import { fromEvent } from "rxjs";
import { throttleTime, map, pairwise, distinctUntilChanged, share, filter } from "rxjs/operators";
import { trigger, state, transition, animate, style } from "@angular/animations";

enum Directions {
  Up = "up",
  Down = "down",
}
enum VisibilityState {
  Visible = "visible",
  Hidden = "hidden",
}

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"],
  animations: [
    trigger("toggle", [
      state(
        "hidden", // Need Fix: VisibilityState.Hidden is returning a not String so we needed to hardcode the string.
        style({ opacity: 0, transform: "translateY(-100%)" }),
      ),
      state(
        "visible", // Need Fix VisibilityState.Visible is returning a not String so we needed to hardcode the string :)
        style({ opacity: 1, transform: "translateY(0)" }),
      ),
      transition("* => *", animate("200ms ease-in")),
    ]),
  ],
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  public project: Project;
  private isVisible = true;
  public projectTitle;

  /**
   * Add CSS Class .card to the Host
   */
  @HostBinding("class")
  get hostClasses(): string {
    return "card";
  }

  @HostBinding("@toggle")
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  constructor(@Inject(Router) public router: Router, @Inject(StoreService) public store: StoreService) {
    store.project$.subscribe(project => (this.project = project));
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, "scroll").pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Directions => (y2 < y1 ? Directions.Up : Directions.Down)),
      distinctUntilChanged(),
      share(),
    );

    console.log(scroll$);

    const scrollUp$ = scroll$.pipe(filter(direction => direction === Directions.Up));

    console.log(scrollUp$);

    const scrollDown = scroll$.pipe(filter(direction => direction === Directions.Down));

    console.log(scrollDown);

    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown.subscribe(() => (this.isVisible = false));

    console.log(VisibilityState.Hidden);
    console.log(VisibilityState.Visible);
  }
}
