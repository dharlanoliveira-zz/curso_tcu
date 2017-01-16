import {Subject} from "rxjs";
import Observable = Rx.Observable;
var Rx = require('rxjs/Rx');

//1. Subject simples
/*var myObservable = new Rx.Subject();
myObservable.next('Subject - before');
myObservable.subscribe(value => console.log(value));
myObservable.next('Subject - after');*/


//2. Replay subject
/*var myObservable = new Rx.ReplaySubject();
myObservable.next('ReplaySubject - before');
myObservable.subscribe(value => console.log(value));
myObservable.next('ReplaySubject - after');*/

//3. Delay e Debounce
/*let myObservable:Subject<string> = new Rx.Subject();
myObservable.delay(3000).subscribe((o) => console.log(o));
myObservable.next('Delay 3000')
myObservable.next('Delay 3000')
myObservable.next('Delay 3000')
myObservable.next('Delay 3000')


myObservable = new Rx.Subject();
myObservable.debounceTime(400).subscribe((o) => console.log(o));
myObservable.next('Debounce1');
myObservable.next('Debounce2');
myObservable.next('Debounce3');
myObservable.next('Debounc4');*/


//4. Map e filter
/*class Pessoa{
    constructor(public nome:string){

    }
}

let myObservable:Subject<Pessoa> = new Rx.Subject();
myObservable
    .map((pessoa => pessoa.nome))
    .subscribe((nome) => console.log(`O nome emitido é ${nome}`));

myObservable.next(new Pessoa('José'));
myObservable.next(new Pessoa('Paulo'));

myObservable = new Rx.Subject();
myObservable
    .map((pessoa => pessoa.nome))
    .filter((nome) => nome.length >= 5)
    .subscribe((nome) => console.log(`O nome emitido é ${nome}`));

myObservable.next(new Pessoa('Joe'));
myObservable.next(new Pessoa('John Paul'));*/

//5. Interval e timer

/*Rx.Observable.interval(500).subscribe((v) => {
    console.log(v)
});*/

/*Rx.Observable.timer(5000).subscribe((v) => {
 console.log(v)
});*/

//5. Combinando observables

/*let obs1:Subject<string> = new Rx.ReplaySubject();
let obs2:Subject<string> = new Rx.ReplaySubject();
let obs3:Subject<string> = new Rx.ReplaySubject();

//var result = Rx.Observable.concat(obs1,obs2,obs3); //Passa para o 2 apenas quando terminar o 1
//var result = Rx.Observable.merge(obs1,obs2,obs3); //Mantem a ordem
var result = Rx.Observable.forkJoin(obs1,obs2,obs3); //Só o ultimo

result.subscribe((x) => console.log(x));


obs1.next('Obs 1.1')
obs1.next('Obs 1.2')
obs1.next('Obs 1.3')

obs2.next('Obs 2.1')
obs2.next('Obs 2.2')
obs2.next('Obs 2.3')
obs2.complete()

obs1.next('Obs 1.4')
obs1.complete();
obs3.next('Obs 3.1')
obs3.complete();

//Dependência entre observables
let first = Rx.Observable.of(10);
first.flatMap((operand1) => {
    return Rx.Observable.of(operand1 + 10);
}).subscribe(res => console.log(res));*/