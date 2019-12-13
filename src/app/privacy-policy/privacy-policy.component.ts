import { Component, OnInit, HostBinding } from "@angular/core";

@Component({
  selector: "app-privacy-policy",
  templateUrl: "./privacy-policy.component.html",
  styleUrls: ["./privacy-policy.component.css"],
})
export class PrivacyPolicyComponent implements OnInit {
  @HostBinding("class")
  get hostClasses(): string {
    return "container";
  }

  constructor() {}

  ngOnInit() {}
}
