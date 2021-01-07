import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import{ ShoppingListService }  from './shopping-list/shopping-list.service'
import{ RecipeService } from './recipes/recipe.service';
import{ DataStorageService } from './shared/data-storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthComponent} from './auth/auth.component'
import {AuthService} from './auth/auth.service'
import {AuthInterceptorService} from "./auth/auth-interceptor.service"
import {AuthGuard} from "./auth/auth.guard"
import {AlertComponent} from "./shared/alert/alert.component"
import {RecipesModule} from './recipes/recipes.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AuthComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService,AuthService,AuthGuard,
              {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService,multi : true}],
  bootstrap: [AppComponent] 
})
export class AppModule { }
