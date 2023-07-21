import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RecipesService } from 'src/app/services/recipes.service';
import { AllRecipe } from '../allrecipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  editRecipe!: AllRecipe;

  constructor(
    private dialogRef: MatDialogRef<EditRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private recipeService: RecipesService
  ) {}

  ngOnInit(): void {
    this.editRecipe = { ...this.data.recipe };
  }

  updateRecipe(): void {
    this.recipeService.updateRecipe(this.editRecipe).subscribe(
      (updatedRecipe: AllRecipe) => {
        console.log('Recipe updated:', updatedRecipe);
        this.dialogRef.close('updated');
      },
      (error) => {
        console.error('Error updating recipe:', error);
      }
    );
  }

  cancelEdit(): void {
    this.dialogRef.close();
  }
}
