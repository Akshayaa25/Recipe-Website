import { RecipesService } from 'src/app/services/recipes.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-recipe',
  templateUrl: './delete-recipe.component.html',
  styleUrls: ['./delete-recipe.component.css']
})
export class DeleteRecipeComponent {
  constructor(
    private dialogRef: MatDialogRef<DeleteRecipeComponent>,
    private recipeService: RecipesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  confirmDelete(): void {
    const recipeId = this.data.recipe.id;
    this.recipeService.deleteRecipe(recipeId).subscribe(
      () => {
        console.log('Recipe deleted successfully');
        this.dialogRef.close('deleted');
      },
      (error) => {
        console.error('Error deleting recipe:', error);
      }
    );
  }

  cancelDelete(): void {
    this.dialogRef.close();
  }
}
