import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef

  @ViewChild('qtyInput') qtyInput: ElementRef

  @Output() addIngredient = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInput.nativeElement.value
    const ingQty = this.qtyInput.nativeElement.value
    const ingredient = new Ingredient(ingName, ingQty)
    this.addIngredient.emit(ingredient)
  }

}
