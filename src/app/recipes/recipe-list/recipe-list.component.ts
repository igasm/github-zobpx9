import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Some Recipe', 'Some description', 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'),
     new Recipe('Another Recipe', 'Another description', 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipesSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
