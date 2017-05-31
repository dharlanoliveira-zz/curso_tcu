import {Component, OnInit} from "@angular/core";
import {Informacoes} from "./informacoes.injectable";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {isUndefined} from "util";

@Component({
  selector: 'alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  private erros: string[] = [];
  private sucesso: string;

  constructor(public informacoes: Informacoes, private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.erros = [];
    });
    this.informacoes.erros.subscribe((e) => {
      this.erros = [];
      this.erros.push(e);
    });
    this.informacoes.sucesso.subscribe((e) => {
      this.sucesso = e;
      Observable.timer(3000).subscribe((v) => {
        this.sucesso = undefined;
      });
    });
  }

}
