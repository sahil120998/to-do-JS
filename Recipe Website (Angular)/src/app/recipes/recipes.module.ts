import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import {NgModule} from "@angular/core"
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component'
import { RecipesComponent } from './recipes.component';
import { ReactiveFormsModule } from "@angular/forms";
import { DropdownDirective } from '../shared/dropdown.directive'

@NgModule({
    declarations :[
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipesComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        DropdownDirective
        ],
    imports:[RouterModule,CommonModule,ReactiveFormsModule],
    exports : [
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipesComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        DropdownDirective
    ]

})

export class RecipesModule{

}