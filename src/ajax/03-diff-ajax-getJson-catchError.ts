import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'http://httpbin.org/delay/1';
// const url = 'http://api.github.com/users?per_page=5';
const error = ( err: AjaxError ) =>  {
    console.warn('error:', err.message);
    return of({
        ok: false,
        usuarios: []
    })
}

// const obs$ = ajax.getJSON( url ).pipe(
//     catchError( error )
// );
// const obs$2 = ajax.getJSON( url).pipe(
//     catchError( error )
// );

const obs$ = ajax.getJSON( url );
const obs$2 = ajax.getJSON( url);

obs$.pipe( 
    catchError( error )
).subscribe({
    next: val => console.log('next:', val),
    error: err => console.log('error en subs:', err),
    complete: () => console.log('complete')
});
// obs$2.subscribe( data => console.log('ajax:', data) )