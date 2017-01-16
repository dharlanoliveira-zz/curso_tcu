import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], arg: string): any {
        if(arg){
            return items.filter(item => item.indexOf(arg) !== -1);
        }
        return items;
    }
}