import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { StoreService } from '../store.service';
import { Project } from '../datatypes/Project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  public project: Project;

  constructor(public route: ActivatedRoute, @Inject(StoreService) private store: StoreService) {
    /**
     * Subscribe to id param in the ActivatedRoute
     * and get project's object from store.service
     */
    route.params.subscribe( (params: Params) => {
      this.project = this.store.retrieveProject(params.id);
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
