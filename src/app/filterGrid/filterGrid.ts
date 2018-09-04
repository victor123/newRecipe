import { Component, OnInit } from "@angular/core";
import { ProductService } from "../service/product.service";
import { filterModule } from "./filterModule";

@Component({
    selector:'filter-grid',
    templateUrl:'./filterGrid.html'
})
export class filterGrid implements OnInit {
    fiterText:string;
    listData;
    select1 =[];
    select2 =[];
    select3 =[];
    select4 =[];
  constructor(private _service:ProductService) {}
  
  fetchData() {
      this._service.fetchGridData().subscribe(
          (data) => {
            this.listData = data;
           for(let item of this.listData) {
            this.select1.push(item.category);
            this.select2.push(item.price);
            this.select3.push(item.availableQuantity);
            this.select4.push(item.daysToShip);

           }
           console.log( this.select1)
          }
      )
  }

   ngOnInit(){
      this.fetchData(); 
   }
    
}