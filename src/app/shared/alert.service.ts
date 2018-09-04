import { Injectable } from "@angular/core";
import {Subject} from 'rxjs/Subject';
import { Alert } from "./shared.interface";


@Injectable()

export class AlertService {
    alertSetting = new Subject<Alert>();

    constructor () {}

    create(title: string, type: string,time:number, body: string){
        this.alertSetting.next({title,time,type,body})

    }

}