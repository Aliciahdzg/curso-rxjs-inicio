import { of } from 'rxjs';

// const obs$ = of<number>(1,2,3,4,5,6);
const obs$ = of<number[]>(...[1,2,3,4,5,6],2,3,4,5);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, Promise.resolve(true));

console.log('Inicio del observable')
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('Terminamos la secuencia!')
)
console.log('Fin del Obs$')