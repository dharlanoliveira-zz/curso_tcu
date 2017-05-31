
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class Informacoes {

  public erros: Subject<string> = new Subject<string>();
  public sucesso: Subject<string> = new Subject<string>();

  public novoErro(erro:string){
    this.erros.next(erro);
  }

  public novoSucesso(msg:string){
    this.sucesso.next(msg);
  }

}
