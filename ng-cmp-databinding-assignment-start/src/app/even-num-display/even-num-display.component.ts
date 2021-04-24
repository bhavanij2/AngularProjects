import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-num-display',
  templateUrl: './even-num-display.component.html',
  styleUrls: ['./even-num-display.component.css']
})
export class EvenNumDisplayComponent implements OnInit {

  @Input() evenNumber: number

  constructor() { }

  ngOnInit() {
  }

}
