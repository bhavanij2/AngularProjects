import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  inactiveCount: number = 0
  activeCount: number = 0

  constructor(private counterService: CounterService) {}

  ngOnInit() {
    this.counterService.inactiveCountEmitter.subscribe(count => this.inactiveCount = count)

    this.counterService.activeCountEmitter.subscribe(count => this.activeCount = count)
  }

}
