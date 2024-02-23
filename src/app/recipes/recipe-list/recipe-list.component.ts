import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor() {
  }

  ngOnInit(): void {
    this.recipes = [new Recipe('A Test Recipe', 'This is simply a test', 'https://media.istockphoto.com/id/1348894913/fr/photo/salade-de-quinoa-dautomne-chaude-avec-l%C3%A9gumes-cuits-au-four-figues-fromage-feta-et-grenade.jpg?s=2048x2048&w=is&k=20&c=GqqA7vBvRjHpXU-AAw7pUc2_SMVCbtxcb639NrAULvA='),
      new Recipe('A Test Recipe', 'This is simply a test', 'https://media.istockphoto.com/id/154926010/fr/photo/spaghetti-au-pesto.jpg?s=1024x1024&w=is&k=20&c=Fc3wN_dmIzQ28VmIpqj07BXl9G3iwKE9aLOlKbuAuqQ=')]
  }
}
