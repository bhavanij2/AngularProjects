import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  showPassword: boolean;
  counter = 0;
  clickList = [];

  constructor() {
    this.showPassword = true
   }

  ngOnInit() { }

  onDisplayClick() {
    this.showPassword = !this.showPassword   
    this.clickList.push(this.counter++)
  }

  getClickColor(index) {
    if(index > 5)
      return 'clickColor' 
  }
}
