import { Injectable,Injector } from "@angular/core";
import {HttpInterceptor} from '@angular/common/http';
import { AuthService } from "../loginResiter/authService/AuthService";


@Injectable()

export class InteruptService implements HttpInterceptor {
    constructor(private _injector:Injector){}
 
intercept(req,next) {
 let authService = this._injector.get(AuthService)
    let tokenizedReq = req.clone({
        setHeader: {
            Authorization: `Bearer ${authService.getToken()}`
        }
    })
    return next.handle(tokenizedReq)
}

}