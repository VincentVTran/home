import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  status:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  clickEvent(){
    this.status = !this.status;    
    console.log("Worked");   
  }
}
