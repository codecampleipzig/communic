import { Component, OnInit, Inject } from "@angular/core";
import { StoreService } from "./../store.service";
import { ProjectCategoryEnum } from "./../datatypes/enums/ProjectCategoryEnum";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  category = ProjectCategoryEnum;

  constructor(@Inject(StoreService) public store: StoreService) {}

  ngOnInit() {
    this.store.retrieveYourProjects();
    this.store.retrieveExploreProjects();
  }
}
