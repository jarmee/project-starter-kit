import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class HelloWorldService {

  constructor(private http: Http) { }

  helloWorld(): Observable<string> {
    const url = `${environment.apiRoot}/hello/world`;
    return this.http.get(url).pipe(
      map(response => response.text())
    );
  }



}
