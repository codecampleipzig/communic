import { Component, OnInit, Inject } from "@angular/core";
import { throwStatement } from "@babel/types";
import { RouterModule, Routes, Router } from "@angular/router";
import { StoreService } from "../store.service";

@Component({
  selector: "app-startnewproject",
  templateUrl: "./startnewproject.component.html",
  styleUrls: ["./startnewproject.component.css"],
})
export class StartnewprojectComponent implements OnInit {
  public projectTitle = "";

  public imagePath;
  imgURL: any;
  public message: string;

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return this.message;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = event => {
      this.imgURL = reader.result;
    };
  }

  constructor(@Inject(Router) private router: Router, @Inject(StoreService) private store: StoreService) {
    this.store.toolbar.next(this.projectTitle);
  }

  ngOnInit() {}

  navigateHome() {
    this.router.navigate(["home"]);
  }

  onSelectFile(event) {
    const eventTarget: any = event.target;
    if (eventTarget.files && eventTarget.files[0]) {
      const reader = new FileReader();

      reader.onload = e => {
        // called once readAsDataURL is completed
        this.imgURL = (e.target as any).result;
      };

      reader.readAsDataURL(eventTarget.files[0]); // read file as data url
    }
  }
}
