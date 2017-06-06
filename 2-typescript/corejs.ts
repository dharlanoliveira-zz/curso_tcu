/*String*/
import core = require("core-js/library");
function texto(){
    console.log('*'.repeat(10));
    console.log(core.String.repeat('$',10));

}

/*Date*/
function date(){
    console.log(new Date().toISOString());
}


/*Array*/

let arraySet = Array.from(new Set([1, 2, 3, 2, 1]));
//console.log(arraySet);

let array = Array.from([1, 2, 3, 2, 1]);
//array.forEach((x) => console.log(x));

//console.log([1, 2, 3, 2, 1].fill(10,0));

/*
console.log(array.findIndex((x) => {
    return x == 3
}));
*/

//console.log(array.join('='));

/*console.log(array.every((x) => x >=0 ));
console.log(array.some((x) => x == 3 ));*/

/*console.log(array.map((x) => x * 2));
console.log(array.filter((x) => x % 2 == 0));
console.log(array.filter((x) => x % 2 == 0).map(x => x * 5 ));*/

/*console.log(array.reduce((sum, val) => {
    return sum + val;
},0));*/


/* Se der tempo mostrar lodash */




