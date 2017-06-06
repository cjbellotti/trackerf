import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { CONFIG } from './config';

@Injectable()
export class ProductService {

  constructor(
    private _http : Http
  ){}

  getAll() {

    return this._http.get(CONFIG.url + 'product').map(res => res.json());

  }

}
