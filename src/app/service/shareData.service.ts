import { EventEmitter} from "@angular/core";
import { recipeModel } from '../recipe/recipeModel';
import {BehaviorSubject} from 'rxjs';
export class ShareDataList { 

sharedata = new EventEmitter<recipeModel>();
loginEvent = new EventEmitter<any>();

eventActive = new BehaviorSubject('login')

setviewMode(mode) {
    this.eventActive.next(mode)

}
}