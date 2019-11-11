import { Component, OnInit, Input } from '@angular/core';
import { User } from '../datatypes/User'
import { StoreService } from '../store.service'

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

  @Input() newUser : string;
  alreadyJoined : boolean = false;
  selectedUser : User;


  constructor(private store: StoreService) { 
    this.selectedUser = this.store.retrieveUser(0);
  }

  ngOnInit() {
  }
  private join(): void{
    this.alreadyJoined = true;
  }

}
