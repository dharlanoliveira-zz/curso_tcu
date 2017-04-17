import {Component} from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  tasks: string[] = ['bTask1', 'aTask2', 'cTask3'];

}
