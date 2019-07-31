import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() shoppingListItemAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAdd(nameInput: HTMLInputElement, amountInput: HTMLInputElement){
    this.shoppingListItemAdded.emit(new Ingredient(nameInput.value, Number(amountInput.value)));
  }

}
