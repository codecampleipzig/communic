import { Component, OnInit, Inject } from "@angular/core";
import { throwStatement } from "@babel/types";
import { RouterModule, Routes, Router } from "@angular/router";

@Component({
  selector: "app-startnewproject",
  templateUrl: "./startnewproject.component.html",
  styleUrls: ["./startnewproject.component.css"]
})
export class StartnewprojectComponent implements OnInit {
  public projectTitle = "FRIES 4 PEACE PROJECT";

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

  constructor(@Inject(Router) private router: Router) {}

  ngOnInit() {}

  navigateHome() {
    this.router.navigate(["home"]);
  }
}
