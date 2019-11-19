import { Component, OnInit, Input, Inject } from '@angular/core';
import { User } from '../datatypes/User';
import { Project } from '../datatypes/Project';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {
  /**
   * Get project's object by parent component app-project-page
   */
  @Input() public project: Project

  @Input() newUser : string;
  alreadyJoined : boolean = false;
  users : User [];


  constructor( @Inject(StoreService) private store: StoreService) { 
    this.users = this.store.retrieveUserList();
  }

  ngOnInit() {
  }
  private join(): void{
    this.alreadyJoined = true;
  }

}
