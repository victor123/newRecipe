import { Injectable, EventEmitter } from "@angular/core";
import { UserList } from '../recipe/recipeModel';
//import { Http,Headers } from '@angular/http';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { filterModule } from "../filterGrid/filterModule";
import { shopee } from "../shoppe/shoppee.model";

import { ErrorObservable } from "rxjs/observable/ErrorObservable";

@Injectable()

export class ProductService {
    private url = 'assets/data2.json';
    private url2 = 'https://reqres.in/api/users';
    private pageUrl = 'https://reqres.in/api/users';
    private getUrl = 'https://jsonplaceholder.typicode.com/users';
    constructor(private _http:HttpClient){}
    sharedata:EventEmitter<any> = new EventEmitter<UserList>();

fetchProductData(){
    return this._http.get<UserList>(this.url2);
}

pageService(page){
    return this._http.get<UserList>(`${this.pageUrl}?page=${page}`);

}

getData(){
 return this._http.get<shopee[]>(this.getUrl)
 .catch(this.handleError)
}

create(data:any){
    return this._http.post('https://jsonplaceholder.typicode.com/users/posts',JSON.stringify(data));

}

// getRoutedata(id:number) {
//     let urls = `${'recipe'}/${id}`;
//     return this._http.get(urls);
// }
fetchGridData(){
    return this._http.get<filterModule>(this.url);
}

private getHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
}

private handleError(errorhandler:HttpErrorResponse) {
    if(errorhandler.error instanceof ErrorEvent) {
        console.error("clientside Error", errorhandler.error.message);
        if(!window.navigator.onLine) {
            alert("No Internet")
        }
    } else {
        if(errorhandler.status === 404 ) {
            console.log("Server side error",errorhandler)  
        }
       
    } 
   return new ErrorObservable( alert('sorry for the interput')); 
  
}

}