import { Component, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {

  /**
   * Add CSS Class .card to the Host
   */
  @HostBinding("class")
  get hostClasses(): string {
    return "card";
  }
  constructor() {}

  ngOnInit() {}

}
