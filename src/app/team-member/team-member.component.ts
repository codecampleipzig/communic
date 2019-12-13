import { Component, OnInit, Input, Inject } from "@angular/core";
import { User } from "../datatypes/User";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-team-member",
  templateUrl: "./team-member.component.html",
  styleUrls: ["./team-member.component.css"],
})
export class TeamMemberComponent implements OnInit {
  @Input() user: User;
  image: string;
  svg: SafeHtml;

  constructor(@Inject(DomSanitizer) public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.image = this.user.userImageUrl;
    this.svg = this.sanitizer.bypassSecurityTrustHtml(this.image);
  }

  imageString() {
    return String(this.image);
  }
}
