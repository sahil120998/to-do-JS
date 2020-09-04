import {Ingredient} from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core';
export class ShoppingListService{
    ingredientAdded = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('Lemons', 5),
        new Ingredient('Lemons', 5)
      ]

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientAdded.emit(this.ingredients.slice())
   
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientAdded.emit(this.ingredients.slice())    }
}