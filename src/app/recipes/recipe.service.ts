import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe('A Test Recipe', 'This is simply a test', 'https://media.istockphoto.com/id/1348894913/fr/photo/salade-de-quinoa-dautomne-chaude-avec-l%C3%A9gumes-cuits-au-four-figues-fromage-feta-et-grenade.jpg?s=2048x2048&w=is&k=20&c=GqqA7vBvRjHpXU-AAw7pUc2_SMVCbtxcb639NrAULvA=', [
    new Ingredient('Meat', 1), new Ingredient('French Fries', 20)
  ]),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://media.istockphoto.com/id/154926010/fr/photo/spaghetti-au-pesto.jpg?s=1024x1024&w=is&k=20&c=Fc3wN_dmIzQ28VmIpqj07BXl9G3iwKE9aLOlKbuAuqQ=', [
      new Ingredient('Buns', 2), new Ingredient('Meat', 1)])]

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }


}
