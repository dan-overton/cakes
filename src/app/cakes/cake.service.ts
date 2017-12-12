import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Cake } from './models/cake';

@Injectable()
export class CakeService {
  private _baseUrl = 'http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api';
  constructor(private _http: HttpClient) { }

  getCake(id: string): Observable<Cake> {
    return this._http.get<Cake[]>(`${this._baseUrl}/cakes/${id}`)
      .catch(this.handleError);
  }

  getCakes(): Observable<Cake[]> {
    return this._http.get<Cake[]>(`${this._baseUrl}/cakes`)
      .catch(this.handleError);
  }

  createCake(cake: Cake): Observable<any> {
    let {id, ...cakeWithoutId} = cake;

    const body = JSON.stringify(cakeWithoutId);

    let headers = new HttpHeaders({'Content-Type': 'application/json'})
    
    return this._http.post(`${this._baseUrl}/cakes`, body, {headers: headers})
      .catch(this.handleError);
  }

  handleError(err) {
    console.log(`CakeService Error: ${err}`)
    return Observable.throw(err.statusText);
  }
}
