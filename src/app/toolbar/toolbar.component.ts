import { Component, OnInit, Input, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { StoreService } from "../store.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  homeIconSource = "../../assets/home.svg";

  public projectTitle;

  constructor(
    @Inject(Router) private router: Router,
    @Inject(StoreService) private store: StoreService
  ) {
    this.store.toolbar$.subscribe(title => (this.projectTitle = title));
  }

  ngOnInit() {}

  navigateHome() {
    this.router.navigate(["home"]);
  }
}

// add two properties set to something static
