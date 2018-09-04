import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[dialogAnchor]',
    

})

export class PopupDirective {
constructor(private viewContainer:ViewContainerRef){}

}