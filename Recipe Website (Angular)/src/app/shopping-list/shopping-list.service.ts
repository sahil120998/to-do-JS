import {Ingredient} from '../shared/ingredient.model'
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientAdded = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 2),
        new Ingredient('Lemons', 5),    
        new Ingredient('breads', 4)
      ]

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
   
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientAdded.next(this.ingredients.slice()); 
    }

    updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientAdded.next(this.ingredients.slice())
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientAdded.next(this.ingredients.slice())
    }
}