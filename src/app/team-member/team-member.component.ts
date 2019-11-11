import { Component, OnInit, Input } from '@angular/core';
import { User } from '../datatypes/User'

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
