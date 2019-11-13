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

}
