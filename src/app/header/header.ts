import { Component } from "@angular/core";
import { AuthService } from "../loginResiter/authService/AuthService";
import { ShareDataList } from "../service/shareData.service";


@Component({
    selector:'header-section',
    templateUrl:'./header.html'
})
export class HeaderSection {
    constructor(private _auth:AuthService, private _share: ShareDataList  ) {}

    showLg(even) {
    this._share.setviewMode(even)
    }
    
}