import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeService} from "./recipe.service";
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  imports: [RecipeListComponent, RecipeDetailComponent, RouterOutlet],
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }
}
