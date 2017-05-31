(function tiposbasicos() {
    let nome: string = "texto";
    let checado: boolean = true;
    let idade: number = 18;
    let objeto = {
        propriedade: 'valor'
    }
    let array: string[] = ['valor1', 'valor2', 'valor3']

    console.log(nome);
    console.log(checado);
    console.log(idade);
    console.log(objeto);
    console.log(array);

    let template: string = `minha idade é ${idade}`;
    console.log(template)
})();


(function enumeracao() {
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }

    let direcao: Direction = Direction.Down;
    console.log(direcao);
});

(function closure() {
    let teste: string = 'oi';

    function TestClosure(value) {
        let _value = value;

        function printValue() {
            console.log(_value);
        }

        return printValue;
    }

    var myClosure1 = TestClosure(12);
    var myClosure2 = TestClosure(34);
    myClosure1();
    myClosure2();

});

(function parametrosopcionais() {

    function imprimir(a: number, b?: number, c?: number, d?: number) {
        console.log(a + ',' + b + ',' + c + ',' + d);
    }

    imprimir(1, 2, 3, 4);
    imprimir(1);
    imprimir(1, 2);


});

(function parametrosrest() {

    function imprimir(...a) {
        console.log(a.length + ":" + a);
    }

    imprimir(1, 2, 3, 4);
    imprimir(1);
    imprimir(1, 2);
});

(function assinaturadefuncao() {

    function mycallback1(texto: string) {
        console.log(texto)
    }

    function mycallback2(numero: number) {
        console.log(numero);
    }

    function chamar(callback: (text: string) => void) {
        callback('aqui');
    }

    chamar(mycallback1);
    //chamar(mycallback2); - erro

});

(function exemplovarelet() {


    function exemplo1() {
        if (true) {
            var exemplo = 100;
        }
        return exemplo;
    }

    function exemplo2() {
        if (true) {
            let exemplo = 200;
        }
        //return exemplo; erro
    }

    console.log(exemplo1());
    console.log(exemplo2());

});

(function exemplounionealias() {

    function exemplo(conteudo: number | string | boolean) {
        console.log(conteudo)
    }

    exemplo('texto');
    exemplo(1);
    exemplo(true);

    type Nomes = string | string[];

    let nomes: Nomes = 'José';
    console.log(nomes)
    nomes = ['José', 'Pedro'];
    console.log(nomes);
});

(function exemploclassecomconstrutor() {

    class Pessoa1 {
        private _nome: string;

        constructor(_nome: string) {
            this._nome = _nome;
        }

        get nome(): string {
            return this._nome;
        }

        set nome(_nome:string){
            this._nome = _nome;
        }
    }

    let pessoa1: Pessoa1 = new Pessoa1('José');
    console.log(pessoa1.nome)

    class Pessoa2 {

        constructor(private _nome: string) {
            this._nome = _nome;
        }

        get nome(): string {
            return this._nome;
        }
    }

    let pessoa2: Pessoa2 = new Pessoa2('Paulo');
    console.log(pessoa2.nome);

    class Pessoa3 {

        constructor(public nome: string) {
        }

    }

    let pessoa3: Pessoa3 = new Pessoa3('Pedro');
    console.log(pessoa3.nome);
});

(function exemploclassecomheranca() {

    class Carro {

        constructor(public nome:string,public potencia:number){

        }

        public valoripva() : number{
            return 100 * this.potencia;
        }

    }

    class Ferrari extends Carro {
        constructor(){
            super('Ferrari', 100);
        }
    }

    let ferrari:Ferrari = new Ferrari();
    console.log(ferrari.valoripva())

});

(function exemplointerfacecomgeneric() {

    interface ICarro {

        valoripva() : number;

    }

    class Ferrari implements ICarro{
        valoripva(): number {
            return 10000.88
        }
    }

    let ferrari:Ferrari = new Ferrari();
    console.log(ferrari.valoripva())

    interface IBase<T> {
        id: T;
    }

    interface IDerivedFromBase extends IBase<number> {
        name: string;
    }

    class DerivedClass implements IDerivedFromBase {
        id: number;
        name: string;
    }

    let classe:DerivedClass = new DerivedClass();
    classe.id = 10;
    classe.name = 'teste';
    console.log(classe.id + '->' + classe.name)


});

(function exemploarrowfunction() {

    var inc = (x)=>x+1; //var inc = function (x) {return x+1};
    console.log(inc(inc(10)));

    let sum = (x,y) => x + y;
    let sum10 = (x) => sum(x,10);

    console.log(sum(10,20));
    console.log(sum10(40));
});

(function outroexemploarrowfunction() {

    class Person {
        constructor(public age:number){

        }
        public growOld = () =>{
            this.age++;   // use the captured this
        }
    }

    let person = new Person(5);
    person.growOld();
    console.log(person.age);

})



