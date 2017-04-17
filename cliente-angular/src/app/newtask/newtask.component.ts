import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {

  private formModel: FormGroup;

  constructor(public formBuilder: FormBuilder, public router: Router) {

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
    this.novoFormulario();
  }

}
