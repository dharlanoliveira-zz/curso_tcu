import { Component } from '@angular/core';

@Component({
    selector: 'tasklist',
    templateUrl: 'app/tasklist.html'
})
export class TasklistComponent  {
    tasks : string[] = ['bTask1','aTask2','cTask3'];
    filtro:string;
}