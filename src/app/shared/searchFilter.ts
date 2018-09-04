import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'filterPipeList',
    pure: true
})

export class FilterListPipe implements PipeTransform {

    transform(value:any, agr:any){
        if(!agr) {
            return value;
        } else if(value) {
            return value.filter(item => {
               for(var key in item) {
                   if((typeof item[key] === 'string' || item[key] instanceof String) &&
                   (item[key].indexOf(agr) !== -1)) {
                       return true
                   }
               } 
            });
        }

    }
}