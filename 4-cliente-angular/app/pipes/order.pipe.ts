import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name: 'order'
})
export class OrderPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return items.sort();
    }
}