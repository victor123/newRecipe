import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router'
import { AuthService } from "../loginResiter/authService/AuthService";

@Injectable()
export class GuardService implements CanActivate {

    constructor(private _route:Router, private _auth:AuthService){ }
  
  canActivate():boolean {
      if(this._auth.userLoggedIn()) {
          return true
      } else {
          this._route.navigate(['/login'])
      }
  }

}