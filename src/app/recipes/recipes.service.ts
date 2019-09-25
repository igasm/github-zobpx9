import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Some Recipe', 
    'Some description', 
    'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
    [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
     new Recipe('Another Recipe', 
     'Another description', 
     'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
     ,[])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice(); //copy of array
  }
}