import {Subject} from "rxjs";
import {Observable} from 'rxjs/Observable';
import {ReplaySubject} from 'rxjs/ReplaySubject';

//1. Subject simples
/*var myObservable: Subject<string> = new Subject();
 myObservable.next('Subject - before');
 myObservable.subscribe(value => console.log(value));
 myObservable.next('Subject - after');*/


//2. Replay subject
/*var myObservable: ReplaySubject<string> = new ReplaySubject();
 myObservable.next('ReplaySubject - before');
 myObservable.subscribe(value => console.log(value));
 myObservable.next('ReplaySubject - after');*/

//3. Delay e Debounce
/*let myObservable: Subject<string> = new Subject();
 myObservable.delay(3000).subscribe((o) => console.log(o));
 myObservable.next('Delay 3000')
 myObservable.next('Delay 3000')
 myObservable.next('Delay 3000')
 myObservable.next('Delay 3000')*/


/*let myObservable: Subject<string> = new Subject();
 myObservable.debounceTime(1000).subscribe((o) => console.log(o));
 myObservable.next('Debounce1');
 myObservable.next('Debounce2');
 myObservable.next('Debounce3');
 myObservable.next('Debounce4');
 myObservable.next('Debounce5');
 myObservable.next('Debounce6');
 myObservable.next('Debounce7');*/


//4. Map e filter
class Pessoa {
    constructor(public nome: string) {

    }
}

/*let myObservable: Subject<Pessoa> = new Subject();
myObservable
    .map((pessoa => pessoa.nome))
    .subscribe((nome) => console.log(`O nome emitido é ${nome}`));

myObservable.next(new Pessoa('José'));
myObservable.next(new Pessoa('Paulo'));

myObservable = new Subject();
myObservable
    .map((pessoa => pessoa.nome))
    .filter((nome) => nome.length >= 5)
    .subscribe((nome) => console.log(`O nome emitido é ${nome}`));

myObservable.next(new Pessoa('Joe'));
myObservable.next(new Pessoa('John Paul'));*/

//5. Interval e timer

/*Observable.interval(500).subscribe((v) => {
 console.log(v)
 });*/

/*Observable.timer(5000).subscribe((v) => {
 console.log(v)
 });*/

//5. Combinando observables

/*
 let obs1:Subject<string> = new ReplaySubject();
 let obs2:Subject<string> = new ReplaySubject();
 let obs3:Subject<string> = new ReplaySubject();
 */

//var result = Observable.concat(obs1,obs2,obs3); //Passa para o 2 apenas quando terminar o 1
//var result = Observable.merge(obs1,obs2,obs3); //Mantem a ordem
/*var result = Observable.forkJoin(obs1,obs2,obs3); //Só o ultimo de cada observador, assim que todos os observadores estiverem completos

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
 obs3.complete();*/

//Dependência entre observables, maneira de encadear observadores no rxjs
/*let first = Observable.of(10);
 first.flatMap((operand1) => {
 return Observable.of(operand1 + 10);
 }).subscribe(res => console.log(res));*/

//Outros métodos interessantes

/*let observable:Observable<number> = Observable.range(0,20)*/
/*observable.take(4).subscribe((it) => {
 console.log(it)
 });*/

/*observable.takeLast(4).subscribe((it) => {
 console.log(it)
 });*/

/*
 observable.skip(4).subscribe((it) => {
 console.log(it)
 });*/

/*
 observable.first().subscribe((it) => {
 console.log(it)
 })*/

/*observable.filter((it) => it % 2 == 0).subscribe((it) => {
 console.log(it);
 })*/

/*observable.max().subscribe((it) => {
 console.log(it);
 })*/

/*observable.min().subscribe((it) => {
 console.log(it);
 })*/
