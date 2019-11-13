import { Component, OnInit } from '@angular/core';
/**
 * We importe the Router, a service that provides navigation and URL manipulation capabilities.
 * We import the StoreService serives to import the logout method.
 */
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.css']
})
export class UserActionComponent implements OnInit {

  public userName: string = "Username";
  public userThumbnail: string = "../../../assets/hpotter-512.png";
  
  /**
   * @param router 
   * @param store 
   */
  constructor(public router: Router, public store: StoreService) { }

  ngOnInit() {
  }

  /**
   * Method logout() from the .html logout anchor.
   * 
   */
  logout() {
    this.store.logout();
    this.router.navigate(['register']);
   }

}
