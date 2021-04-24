import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  filteredNumbers = []

  evenNumbers = [2,4]
  oddNumbers = [1,3,5]

  value = 100

  ngOnInit() {
    
  }

  
  filterOdd() {
    if(this.onlyOdd) {
      this.filteredNumbers = this.numbers.filter(number => number % 2 !== 0)
    } else {
      this.filteredNumbers = this.numbers.filter(number => number % 2 === 0)
    }
  }
}
