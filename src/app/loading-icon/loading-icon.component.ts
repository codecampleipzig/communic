import { Component, OnInit, Inject } from "@angular/core";
import { StoreService } from "../store.service";

@Component({
  selector: "app-loading-icon",
  templateUrl: "./loading-icon.component.html",
  styleUrls: ["./loading-icon.component.css"],
})
export class LoadingIconComponent implements OnInit {
  loading: boolean;
  constructor(@Inject(StoreService) public store: StoreService) {
    store.status$.subscribe(value => (this.loading = Boolean(value.loading)));
  }

  ngOnInit() {}
}
