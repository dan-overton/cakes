import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Cake } from './models/cake';

@Injectable()
export class CakeService {
  private _baseUrl = "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api";
  constructor(private _http: Http) { }

  getCake(id: string) : Observable<Cake> {
    return this._http.get(`${this._baseUrl}/cakes/${id}`)
      .map(response => response.json());
  }

  getCakes() : Observable<Cake[]> {
    return this._http.get(`${this._baseUrl}/cakes`)
    .map(response => response.json())
  }
  
  createCake(cake: Cake) : Observable<any> {
    const body = JSON.stringify(cake);
    return this._http.post(`${this._baseUrl}/cakes`, body);
  }
}
