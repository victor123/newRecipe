import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { ProductService } from "../../service/product.service";

@Component({
    selector:'reciperouteDetail',
    template:``
})

export class RecipeRouteDetail implements OnInit {
listdata;

constructor(private activeroute:ActivatedRoute, private _service:ProductService, private routes:Router){}
 id:number;
 ngOnInit(){
    // this.activeroute.paramMap.subscribe(
    //     (params:Params) => {
    //         this.id = +params['id'];
    //         this.listdata = this._service.getRoutedata(this.id);
    //             (data)=>{
    //                 this.listdata = data
    //                 console.log('router', this.listdata )
    //             }

    //         )
          
    //     }
    // )
}

}