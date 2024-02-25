import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";

@Component({
  standalone: true,
  imports: [RecipeItemComponent],
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit(): void {
    this.recipes = [new Recipe('A Test Recipe', 'This is simply a test', 'https://media.istockphoto.com/id/1348894913/fr/photo/salade-de-quinoa-dautomne-chaude-avec-l%C3%A9gumes-cuits-au-four-figues-fromage-feta-et-grenade.jpg?s=2048x2048&w=is&k=20&c=GqqA7vBvRjHpXU-AAw7pUc2_SMVCbtxcb639NrAULvA='),
      new Recipe('Another Test Recipe', 'This is simply a test', 'https://media.istockphoto.com/id/154926010/fr/photo/spaghetti-au-pesto.jpg?s=1024x1024&w=is&k=20&c=Fc3wN_dmIzQ28VmIpqj07BXl9G3iwKE9aLOlKbuAuqQ=')]
  }
}
