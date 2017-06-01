import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Transacao} from "./transacao";

@Component({
  selector: 'child',
  template: `<h3>Detalhes da transacao {{transacao.nome}}:</h3>
    <ul>
      <li>Responsável: {{transacao.responsavel}}</li>
      <li>Valor: {{transacao.valor | currency: 'BRL': true}}</li>
    </ul>
    <button (click)="confirmar.emit(true);" class="btn btn-raised btn-success">Confirmar</button>`
})
export class ChildComponent {

  @Input()
  private transacao: Transacao;

  @Output()
  private confirmar: EventEmitter<boolean> = new EventEmitter<boolean>();

}
