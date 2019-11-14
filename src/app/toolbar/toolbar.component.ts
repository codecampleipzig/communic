import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  homeIconSource: string = "../../assets/home.svg";
  
  constructor() { }

  ngOnInit() {
  }

  navigateHome() {
    // Implement routing once other components are available and routes are set
    location.reload(true);
  }
}