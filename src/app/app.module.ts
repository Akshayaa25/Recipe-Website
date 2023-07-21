import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { AllrecipeComponent } from './components/allrecipe/allrecipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddRecipeComponent } from './components/allrecipe/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './components/allrecipe/edit-recipe/edit-recipe.component';
import { DeleteRecipeComponent } from './components/allrecipe/delete-recipe/delete-recipe.component';
import { RecipeDetailsComponent } from './components/allrecipe/recipe-details/recipe-details.component';
import { RecipesService } from './services/recipes.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MyrecipeComponent } from './components/myrecipe/myrecipe.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashboardComponent,
    FooterComponent,
    AllrecipeComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    EditRecipeComponent,
    DeleteRecipeComponent,
    MyrecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    EditorModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
