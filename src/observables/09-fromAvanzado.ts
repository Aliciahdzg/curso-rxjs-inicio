import { of, from } from 'rxjs';

/*
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
*/

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
};

const miGen = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGen();
// Manera tradicional de iterar 
// for( let id of miIterable) {
//     console.log(id);
// }

from( miIterable ).subscribe( observer );

// const src$ = from([1,2,3,4,5]);
// const src$ = of([1,2,3,4,5]);

// const src$ = from('Alicia');

// const src$ = from( fetch('http://api.github.com/users/klerith') )

// src$.subscribe( async (res) => {
//     console.log(res);
//     const dataRes = await res.json();
//     console.log(dataRes);
// })

// src$.subscribe( observer );