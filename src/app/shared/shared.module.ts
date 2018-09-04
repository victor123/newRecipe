import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { KeysPipe } from "./nestedObject";
import { AlertComponent  } from './alert.component';
import { AlertService } from "./alert.service";



@NgModule({
    declarations:[
        KeysPipe,
        AlertComponent
    ],
    exports:[
        
        KeysPipe,
        AlertComponent,
       
     
    ],
    imports:[CommonModule],
    providers: [AlertService]
})

export class ShareModule {

}