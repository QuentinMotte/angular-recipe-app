import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeItemComponent} from "./recipe-item/recipe-item.component";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  standalone: true,
  imports: [RecipeItemComponent, RouterLink],
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }


}
