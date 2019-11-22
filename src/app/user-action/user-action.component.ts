import { Component, OnInit, Inject } from "@angular/core";
/**
 * We importe the Router, a service that provides navigation and URL manipulation capabilities.
 * We import the StoreService serives to import the logout method.
 */
import { StoreService } from "../store.service";

@Component({
  selector: "app-user-action",
  templateUrl: "./user-action.component.html",
  styleUrls: ["./user-action.component.css"]
})
export class UserActionComponent implements OnInit {
  public userName = "Username";
  public userThumbnail = "../../../assets/hpotter-512.png";

  constructor(@Inject(StoreService) public store: StoreService) {}

//Subscribe to store for username and thumbnail

  ngOnInit() {
    this.store.user$.subscribe(userState => {
      console.log("subscribe",userState);
      if (userState.userInformation == null) {
        return
      } 
      this.userName = userState.userInformation.userName;
      this.userThumbnail = userState.userInformation.userImageURL;
    });  
  }
  
/* Quick test calling register
this.store.register("Gabe", "blabla@gmail.com", "blabla");
}
*/
  /**
   * Method logout() from the .html logout anchor.
   *
   */
  logout () {
    this.store.logout();
  }
}
