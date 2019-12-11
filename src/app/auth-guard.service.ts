import { Inject, Injectable } from "@angular/core";
import { StoreService } from "./store.service";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(@Inject(StoreService) private store: StoreService, @Inject(Router) private router: Router) {}

  canActivate(): boolean {
    if (this.store.user.getValue().status.loggedIn) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
