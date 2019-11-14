import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      console.log(params.id);
    })
   }

  ngOnInit() {
  }

  /**
   * Workaround: Scroll to top.
   * Note: When user has scrolled to bottom of origin page and then opens Project page, bottom of Project page is shown.
   */
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
