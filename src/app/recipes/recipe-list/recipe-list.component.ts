import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {RecipeService} from "../recipe.service";

@Component({
  standalone: true,
  imports: [RecipeItemComponent],
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


}
