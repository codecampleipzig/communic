import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.css']
})
export class UserActionComponent implements OnInit {

  public userName: string = "Username";
  public userThumbnail: string = "../../assets/user.png";
  
  constructor(public router: Router, public store: StoreService) { }

  ngOnInit() {
  }

  logout() {
    this.store.logout();
    this.router.navigate(['register']);
   }

}
