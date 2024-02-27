import {Component, Input} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor() {

  }


}
