import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { AllRecipe } from '../allrecipe/allrecipe.model';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-myrecipe',
  templateUrl: './myrecipe.component.html',
  styleUrls: ['./myrecipe.component.css']
})
export class MyrecipeComponent {
  data: AllRecipe[] = [];
  loggedInAuthorId!: number;

  constructor(private recipesService: RecipesService, private router: Router) { }

  ngOnInit(): void {
    // this.authService.getLoggedInUser().subscribe((user) => {
    //   if (user) {
    //     this.loggedInAuthorId = user.authorId;
    //     this.getRecipes();
    //   }
    // });
    this.loggedInAuthorId = 4;
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipesService.getRecipeByAuthorId(this.loggedInAuthorId).subscribe((recipes) => {
      console.log(this.data)
      this.data = recipes;
    });
  }

  viewRecipeDetails(recipeId: number): void {
    this.router.navigateByUrl(`/recipeDetails/${recipeId}`);
  }
  // canEditDelete: boolean = true;
  // canEditDeleteRecipe(authorId: number): boolean {
  //   const loggedInAuthorId = 4;
  //   return loggedInAuthorId === authorId;
  // }
}
