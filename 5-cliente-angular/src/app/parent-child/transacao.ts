export class Transacao {
  private nome:string;
  private responsavel:string;
  private valor:number;

  constructor(nome?: string, responsavel?: string, valor?: number) {
    this.nome = nome;
    this.responsavel = responsavel;
    this.valor = valor;
  }
}
