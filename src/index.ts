import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

// const url = 'http://httpbin.org/delay/1';
const url = 'http://api.github.com/users?per_page=5';

const errorManager = ( response: Response ) => {

    if ( response.ok ) {
        throw new Error( response.statusText );
    }

    return response;
}

const fectchPromise = fetch( url );

// fetch without error manager
// fectchPromise
//      .then( resp => resp.json() )
//      .then( console.log )
//      .catch( err => console.warn('error en usuarios', err))

// Fetch with error manager
fectchPromise
     .then( errorManager )
     .then( resp => resp.json() )
     .then( console.log )
     .catch( err => console.warn('error en usuarios', err))