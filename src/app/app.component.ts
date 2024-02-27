import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  imports: [HeaderComponent, RecipesComponent, ShoppingListComponent, RouterLink, RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

