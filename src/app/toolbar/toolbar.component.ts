import { Component, OnInit, Input, Inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  homeIconSource = "../../assets/home.svg";

  constructor(@Inject(Router) private router: Router) {}

  ngOnInit() {}

  navigateHome() {
    this.router.navigate(["home"]);
  }
}
