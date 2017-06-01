import {Component, OnInit} from "@angular/core";
import {Transacao} from "./transacao";

@Component({
  selector: 'parent',
  template: `
  <h1>Parent</h1>
  <child [transacao]="transacao" (confirmar)="confirmarTransacao()"></child>
  `
})
export class ParentComponent implements OnInit {


  private transacao: Transacao;

  ngOnInit(): void {
    this.transacao = new Transacao("Transação 1","José",1200.33);
  }

  confirmarTransacao(){
    this.transacao = new Transacao();
  }


}
