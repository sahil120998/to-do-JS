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
  constructor(private recipeService: RecipeService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    //const id= this.route.snapshot.params['id'];
    this.route.params.subscribe((params:Params)=>{
      this.id= +params['id']
      console.log(this.id)
      this.recipe=this.recipeService.getRecipe(this.id)
    })
    }
  

  onAddToShoppingList(){
   this.recipeService.addToShoppingList(this.recipe.ingredients)
  }
  onEditRecipe(){
  this.router.navigate(["edit"],{relativeTo: this.route})
  }
}