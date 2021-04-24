import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  timer: any
  counter: number = 0

  @Output() numberEmitter = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  startTimer() {
    this.timer = setInterval(() => 
    { this.numberEmitter.emit(this.counter)
      this.counter++;
    }, 1000)
  }
  
  stopTimer() {
    this.counter = 0;
    clearInterval(this.timer)
  }

}
