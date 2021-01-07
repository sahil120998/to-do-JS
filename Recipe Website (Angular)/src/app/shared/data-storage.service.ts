import{Injectable} from "@angular/core"
import{HttpClient, HttpParams} from "@angular/common/http"
import {exhaustMap, map,take,tap } from "rxjs/operators"

import { Recipe } from '../recipes/recipe-list/recipe.model'
import { RecipeService } from '../recipes/recipe.service'
import { AuthService } from "../auth/auth.service"

@Injectable()
export class DataStorageService{
    constructor(private http:HttpClient,private recipeService:RecipeService,private authService: AuthService) {}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes( );
        this.http.put("https://ng-recipe-app-44cc7-default-rtdb.firebaseio.com/recipes.json",recipes).
        subscribe(response => {
            console.log(response)
        })
    }

    fetchRecipes(){
                return this.http.
                get<Recipe[]>("https://ng-recipe-app-44cc7-default-rtdb.firebaseio.com/recipes.json").
                pipe(
            map(recipes => {
                return recipes.map(recipe => {
                    return {
                        ...recipe,
                        ingredients: recipe.ingredients ? recipe.ingredients : []
                            };
                    }   
                );
    }),
    tap(recipes => {
        console.log(recipes)
        console.log('kkf')
        this.recipeService.setRecipes(recipes); 
    }))
      
    }
        
}

