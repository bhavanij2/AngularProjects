import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-num-display',
  templateUrl: './odd-num-display.component.html',
  styleUrls: ['./odd-num-display.component.css']
})
export class OddNumDisplayComponent implements OnInit {

  @Input() oddNumber: number
  
  constructor() { }

  ngOnInit() {
  }

}
