import { Observable, Observer } from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]', value),
    error: error => console.warn('error [obs]', error),
    complete: () => console.log('completado [obs]')
}

const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un erro
    // const a = undefined;
    // a.nombre = 'Alicia';
    
    subs.complete();
})

// obs$.subscribe(
//     valor => console.log('next', valor),
//     error => console.warn('error', error),
//     () => console.log('Completado')
// )

obs$.subscribe( observer );