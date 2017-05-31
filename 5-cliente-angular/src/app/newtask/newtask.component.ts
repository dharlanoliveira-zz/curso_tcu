import {ChangeDetectorRef, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {Informacoes} from "../erros/informacoes.injectable";

@Component({
  selector: 'newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
  /*encapsulation: ViewEncapsulation.Emulated -- Explicar junto com o CSS*/
})
export class NewtaskComponent implements OnInit {

  private formModel: FormGroup;

  constructor(public formBuilder: FormBuilder, public router: Router, public http: Http, public informacoes: Informacoes) {

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
      .subscribe(() => {
        this.informacoes.novoSucesso("Tarefa salva com sucesso");
        this.router.navigate(['tasks'])
      }), (e) => {
      if (e.status == 0) {
        this.informacoes.novoErro('Serviço está fora do ar');
      } else {
        this.informacoes.novoErro(e.statusText);
      }
    }
  }

}
