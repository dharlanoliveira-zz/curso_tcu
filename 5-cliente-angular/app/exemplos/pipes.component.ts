import {Component} from "@angular/core";


@Component({
    selector: 'pipes',
    templateUrl: 'app/exemplos/pipes.html'
})
export class PipesComponent {

    percentual = 0.99;
    texto = "Este é Um Texto de Exemplo"
    dinheiro = 1453.66
    data= new Date("October 13, 2014 11:13:00")

}