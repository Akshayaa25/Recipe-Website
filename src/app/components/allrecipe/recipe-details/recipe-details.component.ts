import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteRecipeComponent } from '../delete-recipe/delete-recipe.component';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { AllRecipe } from '../allrecipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: AllRecipe = new AllRecipe();

  constructor(
    private recipeService: RecipesService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const recipeId = Number(params['id']);
      this.loadRecipeDetails(recipeId);
    });
  }

  loadRecipeDetails(recipeId: number): void {
    this.recipeService.getRecipeById(recipeId).subscribe(
      (recipe) => {
        this.recipe = recipe;
      },
      (error) => {
        console.error('Error loading recipe details:', error);
      }
    );
  }

  openDeleteDialog(): void {
    const dialogRef = this.dialog.open(DeleteRecipeComponent, {
      width: '400px',
      height: '150px',
      panelClass: 'custom-dialog-container',
      data: { recipe: { ...this.recipe } }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'deleted') {
        this.router.navigateByUrl('/allrecipes');
      }
    });
  }

  openUpdateDialog(): void {
    const dialogRef = this.dialog.open(EditRecipeComponent, {
      width: '600px',
      height: '650px',
      panelClass: 'custom-dialog-container',
      data: { recipe: { ...this.recipe } }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'updated') {
        this.loadRecipeDetails(this.recipe.id);
      }
    });
  }

  onBack(): void {
    this.router.navigateByUrl('/allrecipes');
  }
}
