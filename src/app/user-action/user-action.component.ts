import { Component, OnInit, Inject } from "@angular/core";
/**
 * We import the StoreService serives to import the logout method.
 */
import { StoreService } from "../store.service";
import { SafeHtml, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-user-action",
  templateUrl: "./user-action.component.html",
  styleUrls: ["./user-action.component.css"],
})
export class UserActionComponent implements OnInit {
  public userName = "Username";
  image: string;
  svg: SafeHtml;

  constructor(@Inject(StoreService) public store: StoreService, @Inject(DomSanitizer) public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.store.user$.subscribe(userState => {
      if (userState.userInformation == null) {
        return;
      }
      this.userName = userState.userInformation.userName;
      this.image = userState.userInformation.userImageUrl;

      this.svg = this.sanitizer.bypassSecurityTrustHtml(this.image);
    });
  }

  imageString() {
    return String(this.image);
  }

  /* Quick test calling register
this.store.register("Gabe", "blabla@gmail.com", "blabla");
}
*/
  /**
   * Method logout() from the .html logout anchor.
   *
   */
  logout() {
    this.store.logout();
  }
}
