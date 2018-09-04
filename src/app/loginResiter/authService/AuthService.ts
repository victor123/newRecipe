import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AuthService {
    constructor(private _http: HttpClient) { }
    private url = 'https://reqres.in/api/login';
    private RegUrl = 'https://reqres.in/api/register'

    userRegister(reg) {
        return this._http.post<any>(this.RegUrl,reg)
    }

    userLogin(log) {
        return this._http.post<any>(this.url,log)
    }
 
    userLoggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }

    logout() {
        localStorage.removeItem('token');
    }

}