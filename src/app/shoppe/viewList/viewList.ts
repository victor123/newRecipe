import { Component, OnInit, Input } from "@angular/core";
import { shopee } from "../shoppee.model";


@Component({
    selector:"view-list",
    templateUrl:'./viewList.html'
})

export class ViewList implements OnInit {
  
    @Input() viewData:shopee;

   constructor(){}
    
    ngOnInit(){

    }

}