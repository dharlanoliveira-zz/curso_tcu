import { Component } from '@angular/core';

@Component({
    selector: 'tasklist',
    templateUrl: 'app/tasklist.html'
})
export class TasklistComponent  {
    tasks : string[] = ['Task1','Task2','Task3'];
}