import { Component, OnInit, HostBinding, Inject, Input, AfterViewInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { StoreService } from "../store.service";
import { Project } from "../datatypes/Project";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"],
})
export class ToolbarComponent implements OnInit {
  @Input() public project: Project;
  /**
   * Add CSS Class .card to the Host
   */
  @HostBinding("class")
  get hostClasses(): string {
    return "card";
  }

  public projectTitle;

  constructor(@Inject(Router) public router: Router, @Inject(StoreService) public store: StoreService) {
    /** Commented as it throws errors.
     * this.store.toolbar$.subscribe(title => (this.projectTitle = title));
     */
  }

  ngOnInit() {}
}
