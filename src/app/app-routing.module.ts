import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AllrecipeComponent } from './components/allrecipe/allrecipe.component';
import { RecipeDetailsComponent } from './components/allrecipe/recipe-details/recipe-details.component';
import { AddRecipeComponent } from './components/allrecipe/add-recipe/add-recipe.component';
import { MyrecipeComponent } from './components/myrecipe/myrecipe.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:'allrecipes',
    component:AllrecipeComponent
  },
  {
    path:'myrecipe',
    component:MyrecipeComponent
  },
  {
    path:'addrecipe',
    component:AddRecipeComponent
  },
  {
    path:'recipeDetails/:id',
    component:RecipeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
