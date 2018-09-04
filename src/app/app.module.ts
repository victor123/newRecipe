import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeModule } from './recipe/recipe.module';
import { HeaderSection } from './header/header';
import { RouterListModule,routerComponent } from './app.router.module';
import { ProductService } from './service/product.service';
import { ShareDataList } from './service/shareData.service';
import { LoaderComponent } from './loader-component';
import { AuthService } from './loginResiter/authService/AuthService';
import { GuardService } from './gaurtService/gaurtservice';
import { InteruptService } from './service/interupService';
import { AppErrorHandle } from './appErrorHandle';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { ShoppeeModule } from './shoppe/shoppe.module';
import { ShareModule } from './shared/shared.module';
import { filterGrid } from './filterGrid/filterGrid';
import { FilterPipe } from './shared/filterDuplicate';
import { FilterListPipe } from './shared/searchFilter';
import { SessionStorageService } from './service/localstorage.service';
import { BudgetService } from './TabSection/Budget.service';


// import { RecipeList } from './recipe/recipelist/recipelist';
// import { RecipeItem } from './recipe/recipeItem/recipeitem';
// import { RecipeDetail } from './recipe/recipeDetail/recipedetail';


@NgModule({
  declarations: [
    AppComponent,
    HeaderSection,
    LoaderComponent,
     //RecipeList,
    //RecipeItem,
    //RecipeDetail,
    routerComponent,
    filterGrid,
    FilterPipe,
    FilterListPipe,
    

    
  ],
  imports: [
   
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RecipeModule,
    RouterListModule,
    HttpClientModule,
    NgxPaginationModule,
    ShoppeeModule,
    ShareModule,
    BrowserAnimationsModule,
    
    ],
  providers: [ProductService,ShareDataList,AuthService,GuardService,SessionStorageService,
    BudgetService
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: InteruptService,
  //   multi: true
  // },
  // {
  // provide:ErrorHandler,
  // useClass:AppErrorHandle
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
