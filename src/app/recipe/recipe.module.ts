import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecipeList } from "./recipelist/recipelist";
// import { RecipeDetail } from "./recipeDetail/recipedetail";
import { RecipeItem } from "./recipeItem/recipeitem";
import { AddRecipe } from "./addRecipe/addRecipe";
import { ShareModule } from "../shared/shared.module";
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

//import { KeyArrayPipe } from "./keys.pipe";

//import { RecipeRouteDetail } from "./recipeRoute/recipeRouteDetail";


@NgModule({
    declarations:[
        RecipeList,
        RecipeItem,
        AddRecipe
       //KeyArrayPipe
       // RecipeRouteDetail  
    ],
    imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,ShareModule,
    NgxPaginationModule
    
    ],
    exports:[RecipeList,RecipeItem,AddRecipe,NgxPaginationModule]

})

export class RecipeModule {}

