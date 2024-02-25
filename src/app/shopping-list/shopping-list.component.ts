import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";

@Component({
  standalone: true,
  imports: [ShoppingEditComponent],
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() {
  }

  ngOnInit() {
    this.ingredients = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 10)
    ];
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];
  }

}
