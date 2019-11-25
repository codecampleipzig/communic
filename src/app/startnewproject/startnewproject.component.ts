import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { throwStatement } from "@babel/types";

@Component({
  selector: "app-startnewproject",
  templateUrl: "./startnewproject.component.html",
  styleUrls: ["./startnewproject.component.css"]
})
export class StartnewprojectComponent implements OnInit {
  public projectTitle: string = "FRIES 4 PEACE PROJECT";

  public imagePath;
  imgURL: any;
  public message: string;

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return this.message;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.imgURL = reader.result;
    };
  }

  constructor() {}

  ngOnInit() {}
}
