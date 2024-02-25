import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  standalone: true,
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe;
}
