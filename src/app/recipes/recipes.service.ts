import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Some Recipe', 'Some description', 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'),
     new Recipe('Another Recipe', 'Another description', 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png')
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice(); //copy of array
  }
}