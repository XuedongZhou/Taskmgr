import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../domain/quote.model';
import { map } from 'rxjs/operators';


@Injectable()
export class QuoteService {
  constructor(private http: HttpClient, @Inject('BASE_CONFIG') private config) { }

  getQuote(): Observable<Quote> {
    const uri = `${this.config.uri}/quotes/${Math.floor(Math.random() * 10)}`;
    return this.http.get(uri).debug('quote: ').pipe(map(res => res as Quote));
  }
}
