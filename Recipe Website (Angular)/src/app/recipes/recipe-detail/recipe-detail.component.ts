import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params,Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
   recipe: Recipe;
   id:number;
   addIngredients = false
   added = "Ingredients added to Shopping list. Check it out!!!"
  constructor(private recipeService: RecipeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    //const id= this.route.snapshot.params['id'];
    this.route.params.subscribe((params:Params)=>{
      this.id= +params['id']
      this.recipe=this.recipeService.getRecipe(this.id)
    })
    }
  

  onAddToShoppingList(){
   this.recipeService.addToShoppingList(this.recipe.ingredients)
   this.addIngredients = true

  }

  onAddIngredientsToShoppingList(){
    this.addIngredients = false
  }

  onEditRecipe(){
  this.router.navigate(["edit"],{relativeTo: this.route})
  }
  
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])

  }
}
