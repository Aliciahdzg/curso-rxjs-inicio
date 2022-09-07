import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'http://httpbin.org/delay/1';
// const url = 'http://api.github.com/users?per_page=5';

// 
ajax({
    url,
    method: 'GET',
    headers: {
        'token': 'ABC1234'
    }, 
    body: {
        id:1,
        nombre: 'Alicia'
    }
}).subscribe ( console.log )
