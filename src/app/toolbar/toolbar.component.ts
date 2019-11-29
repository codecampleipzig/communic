import { Component, OnInit, HostBinding, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { StoreService } from "../store.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"],
})
export class ToolbarComponent implements OnInit {
  /**
   * Add CSS Class .card to the Host
   */
  @HostBinding("class")
  get hostClasses(): string {
    return "card";
  }

  public projectTitle;

  constructor(@Inject(Router) private router: Router, @Inject(StoreService) private store: StoreService) {
    /** Commented as it throws errors.
     * this.store.toolbar$.subscribe(title => (this.projectTitle = title));
     */
  }

  ngOnInit() {}
}
