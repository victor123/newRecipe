import { Component, OnInit } from "@angular/core";
import { ShareDataList } from "../service/shareData.service";
import { AlertService } from "../shared/alert.service";

@Component({
    selector:'loginMain',
    templateUrl:'./login-regist.html'
})

export class LoginRegisComponent implements OnInit{
    LoadComponent = "login"
 

    constructor(private _share: ShareDataList, private alert:AlertService) {
        // this._share.loginEvent.subscribe(
        //     (res) => {
        //         console.log(res)
        //      this.LoadComponent = res
        //     } 
        //  )
    }
    onSelect(even) {
     this.LoadComponent = even   
    }
    trigerAlert() {
        this.alert.create(
            "Title", //title
            "danger", //type
             100, // time
            "success Alert" //body  
        )
    }
    ngOnInit(){
       this._share.eventActive.subscribe(
           (res) => {
               this.LoadComponent = res
           }
       )
        
    }

}