import {Component} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";

@Component({
  standalone: true,
  imports: [RecipeListComponent, RecipeDetailComponent],
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  getRecipeDetails(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
