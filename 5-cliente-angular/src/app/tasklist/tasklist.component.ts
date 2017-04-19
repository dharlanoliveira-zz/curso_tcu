import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  tasks: string[] = [];


  constructor(public http: Http) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/tasks')
      .subscribe((res) => this.tasks = res.json().tasks);
  }

  public deletar(index: number) {
    this.http.delete(`http://localhost:3000/tasks/${index}`)
      .subscribe((res) => {
        delete this.tasks[index];
        this.tasks = _.compact(this.tasks);
      });
  }


  public deletarTodos() {
    this.http.delete(`http://localhost:3000/tasks`)
      .subscribe((res) => {
        this.tasks = [];
      });
  }

}
