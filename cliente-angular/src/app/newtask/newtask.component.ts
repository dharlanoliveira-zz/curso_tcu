import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  private formModel: FormGroup;

  constructor(public formBuilder: FormBuilder, public router: Router, public http: Http) {

  }

  ngOnInit() {
    this.novoFormulario();
  }

  private novoFormulario() {
    this.formModel = this.formBuilder.group({
      task: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }

  public newTask(f: any) {
    this.http.post('http://localhost:3000/tasks', {task: f.task})
      .subscribe(() => this.router.navigate(['tasks']));
  }

}
