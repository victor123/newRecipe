import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { ProductService } from "../../service/product.service";

import { AlertService } from "../../shared/alert.service";
import { SessionStorageService } from "../../service/localstorage.service";

@Component({
    selector:"view-row",
    templateUrl:'./viewRow.html'
})

export class ViewRow implements OnInit,OnDestroy {
 //@Output() users:EventEmitter<shopee> = new EventEmitter<any>()
 showLoader:boolean
   loadData:boolean = true;
   getData;
   viewData;
   users;
   
   constructor(private _localStorage:SessionStorageService,
    private _service:ProductService, 
    private alert:AlertService){}
    
    fetchData() {
        this._service.getData().subscribe(
            (res)=> {
         
             this.showLoader = true
             let cloneData = {'userdata':res}
             this._localStorage.setData('userdata',cloneData);
             let item = this._localStorage.getData('userdata');
             console.log(item)
             this.getData = item.userdata
            
            },
            (error) => {
                throw error
            }
           
        )
    }
  
  
    ngOnInit(){
        this.fetchData()
    
          }
  ngOnDestroy(){
    this._localStorage.removeData('userdata') 

  }
    popup(even,list) {
        
        console.log(list)
        this.alert.create(
            "Title", //title
            "danger", //type
             100, // time
            "dancer Alert" //body  
        )
    }

   editList(even) {
       console.log(even)
   this.users = Object.assign({},even);
   //this.users.emit(even)
   //console.log(this.users.emit(even))
    }

    viewList(even) {
      this.viewData = even
    }

    deleteList(even) {
        console.log(even)
    }
   

}