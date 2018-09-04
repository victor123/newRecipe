import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector:'shoppenew',
    templateUrl:'./shoppeNew.html'
})
export class ShoppeNew implements OnInit {
    constructor(private active:ActivatedRoute){}
    listdata;
    id:number;
    ngOnInit(){
        // this.active.paramMap.subscribe(
        //     (params:ParamMap) => {
        //         let id = params.get('id');
        //         this.listdata = id
        //     }
        // )

        this.active.params.subscribe(
            (params:ParamMap)=>{
                let id = params['name'];
                this.listdata = id
            }
        )
    }
}