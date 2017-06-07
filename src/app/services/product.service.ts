import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { CONFIG } from './config';

@Injectable()
export class ProductService {

  private _serviceName : string = 'product';

  constructor(
    private _http : Http
  ){}

  getAll() {

    return this._http.get(CONFIG.url + this._serviceName).map(res => res.json());

  }

  getProductByProductInfoAndLocation(productInfoId : number, locationId : number ) {

    return this._http.get(CONFIG.url + this._serviceName + '/product-info/' + productInfoId + '/warehouse/' + locationId).map(res => res.json());

  }

  create(product: Product) {

    let request = JSON.stringify(product);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    return this._http.post(CONFIG.url + this._serviceName, request, { headers : headers}).map( res => res.json());

  }

}
