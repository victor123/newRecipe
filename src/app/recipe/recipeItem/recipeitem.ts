import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
// import { ProductService } from "../../service/product.service";
import { Router } from '@angular/router';
import { UserList } from '../../recipe/recipeModel';
import { ProductService } from "../../service/product.service";
import { Observable } from "rxjs";




@Component({
    selector: 'recipeitem',
    templateUrl: './recipeitem.html'
})
export class RecipeItem implements OnInit {
    //@Input() listData:UserList;
    listData:UserList[]=[];
    loaderSection: boolean;
    totalItem: Number;
    totalpages: number;
    curpage: number = 1;
    @Output() sharaList: EventEmitter<UserList> = new EventEmitter<any>()
    selecItem;

    constructor(private route: Router, private _service: ProductService) {}

    onSelect(event, item) {
        this.route.navigate(['/recipe', item.id])
        this.selecItem = item

    }

    //    keys:any =[];
    //    public getKey(data) {
    //        this.keys =Object.keys(data);
    //        return true
    //    }
    listShow(list) {

        this.sharaList.emit(list);
    }

    getServerData(page) {
        this.loaderSection = true;
        this._service.pageService(page).subscribe(
            (res) => {
                console.log("kkkk",res)
                this.listData = res.data;
                this.totalItem = res.total;
                this.curpage = res.page;
                this.totalpages = res.total_pages;
                this.loaderSection = false;

                console.log("sssss", this.totalItem)
            }
        )
    }

    ngOnInit() {

        this.getServerData(1)
    }
}