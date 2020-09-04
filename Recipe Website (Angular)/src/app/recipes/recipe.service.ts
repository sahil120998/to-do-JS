import { Recipe } from './recipe-list/recipe.model'
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService{
    recipeselected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe('Vada Pav',
        'Street style taste!!',
         'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/glnraqp4kbvpy1smoui2',
         [new Ingredient('potato',1),
          new Ingredient('buns',2)]),
        new Recipe('Burger',
        'blahhblahhh...wow!!',
         'https://i.guim.co.uk/img/media/42bec9e038a74f948c708096dac0a5a2ed4d3644/0_330_3500_2100/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=135036d53fe10881a0f403331abeb6f0',
         [new Ingredient('Meat',1),
         new Ingredient('buns',3)])
      ];

      constructor(private shoppingListService:ShoppingListService ){}
      getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index:number){
        return this.recipes[index];
    }

    addToShoppingList(ingredients:Ingredient[]){
      this.shoppingListService.addIngredients(ingredients);

    }



}

    