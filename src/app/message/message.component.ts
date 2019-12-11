import { Component, OnInit, Inject } from "@angular/core";
import { StoreService } from "../store.service";
import { strictEqual } from "assert";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
})
export class MessageComponent implements OnInit {
  public messages = null;

  constructor(@Inject(StoreService) public store: StoreService) {
    store.messages$.subscribe(x => {
      this.messages = x;

      // Setup AutoClose
      for (const message of this.messages) {
        if (message.autoClose) {
          setTimeout(() => {
            store.closeMessage(message.id);
          }, message.autoClose);
        }
      }
    });
  }

  ngOnInit() {}
}
