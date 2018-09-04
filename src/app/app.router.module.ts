import { NgModule } from "@angular/core";
import { Routes,RouterModule} from'@angular/router';

import { RecipeDetail } from "./recipe/recipeDetail/recipedetail";
import { ShoppeNew } from "./shoppe/shoppeNew/shoppeNew";
import { RecipeRouteDetail } from "./recipe/recipeRoute/recipeRouteDetail";
import { LoginComponent } from "./loginResiter/login/login.component";
import { RegisterComponent } from "./loginResiter/register/register.component";
import { NgxPaginationModule} from 'ngx-pagination'; 
import { LoginRegisComponent } from "./loginResiter/login-regis";
import { GuardService } from "./gaurtService/gaurtservice";
import { ViewRow } from "./shoppe/view/viewRow";
import { filterGrid } from './filterGrid/filterGrid';
import { TabSection } from "./TabSection/tabs";



const route:Routes = [
    {path:'shopping', component:ViewRow},
    {path:'recipe', component:RecipeDetail,
     canActivate:[GuardService]
  },
    {path:'recipe/:id', component:ShoppeNew},
    //{path:'recipe', component:RecipeDetail, children:[
    //   {path:'recipe/:id', component:RecipeRouteDetail},
    //    {path:'next', component:ShoppeNew}  
    // ]},
    {path:'login', component:LoginRegisComponent},
    {path:'filter', component:filterGrid},
    {path:'tab', component:TabSection},
    // {path:'register', component:RegisterComponent},
    {path:'', component:LoginRegisComponent}
]

@NgModule({
  imports:[
     RouterModule.forRoot(route)
  ],
  exports:[RouterModule,NgxPaginationModule]
})

export class RouterListModule {}
export const routerComponent = [TabSection,filterGrid,RecipeDetail,ShoppeNew,RecipeRouteDetail,LoginComponent,RegisterComponent,LoginRegisComponent,ViewRow]