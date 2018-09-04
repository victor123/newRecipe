import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { budget } from "./budget.model";
import  {Observable} from "rxjs/Observable";

@Injectable()

export class BudgetService {

    constructor (private _http:HttpClient) {}
    private url ='assets/budget.json';

budgetFetchData(){
    
 return this._http.get<budget>(this.url);

}



}