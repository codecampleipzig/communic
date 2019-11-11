import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.css']
})
export class UserActionComponent implements OnInit {

  public userName: string = "Username";
  public userThumbnail: string = "../../assets/user.png";
  
  constructor() { }

  ngOnInit() {
  }

  logout() {
    // Implement routing once other components are available and routes are set
    console.log("Clicked Logout!");
   }

}
