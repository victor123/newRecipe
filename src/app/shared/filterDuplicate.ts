import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'unique',
    pure: false

})

export class FilterPipe implements PipeTransform{
    transform(value: any, args?: any): any {
      //let uniqueArray = value.filter( (el, index, array) => el && array.indexOf(el) === index);
      var uniqueItems = value.filter(function(el,index,array){
          return array.indexOf (el) == index
      }) 
      return uniqueItems; 
     }
}