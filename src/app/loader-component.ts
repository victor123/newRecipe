import { Component } from "@angular/core";

@Component({
    selector:'loader',
    template:`
    <div class="overlay">
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
   </div>
    `


})

export class LoaderComponent {

}