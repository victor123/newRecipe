import { Component,OnInit,Input } from "@angular/core";
// import { ProductService } from "../../service/product.service";
import { UserList } from '../../recipe/recipeModel';


@Component({
selector:'recipelist',
templateUrl:'./recipelist.html'
})
export class RecipeList implements OnInit {
    @Input() listgroup:UserList;
    constructor(){}

 
  ngOnInit(){
    // this._data.sharedata.subscribe(
    //     (data) => {
    //         this.listdata = data
    //     }
    // )
  }  
 
}