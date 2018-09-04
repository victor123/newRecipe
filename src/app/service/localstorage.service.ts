import { Injectable } from '@angular/core';

@Injectable()
export class SessionStorageService {

    public setData(key: string, data: any) {
       return localStorage.setItem(key, JSON.stringify(data))
    }

    public getData(key: string) {
        return JSON.parse(localStorage.getItem(key));

    }

    public removeData(key:string) {
       return localStorage.removeItem(key)
    }

}