import { Component } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { AllRecipe } from '../allrecipe/allrecipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myrecipe',
  templateUrl: './myrecipe.component.html',
  styleUrls: ['./myrecipe.component.css']
})
export class MyrecipeComponent {
  data: AllRecipe[] = [];
  filteredRecipes: any[] = [];
  searchQuery: string = '';

  constructor(private recipesService: RecipesService, private router: Router) {}

  ngOnInit(): void {
    this.getAllRecipes();
    this.recipesService.searchQuery$.subscribe((query) => {
      console.log(query);
      this.filterRecipe(query);
    });
  }

  getAllRecipes(): void {
    this.recipesService.getAllRecipes().subscribe((recipes) => {
      this.data = recipes;
      this.filterRecipe();
    });
  }

  viewRecipeDetails(recipeId: number): void {
    this.router.navigateByUrl(`/recipeDetails/${recipeId}`);
  }

  searchRecipe() {
    console.log(this.searchQuery);
    this.recipesService.setSearchQuery(this.searchQuery);
  }

  filterRecipe(query: string = '') {
    console.log('Filtering recipes with query:', query);
    const lowerCaseQuery = query.toLowerCase();
    this.filteredRecipes = this.data.filter((recipe) => {
      if (recipe) {
        const articleProperties = Object.values(recipe).map((property) => {
          return String(property).toLowerCase();
        });
        return articleProperties.some((property) =>
          property.includes(lowerCaseQuery)
        );
      }
      return false;
    });
  }
}
