import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { StockMovement } from '../models/stock-movement';
import { CONFIG } from './config';

@Injectable()
export class StockMovementService {

  private _serviceName = 'stock_movement';

  constructor(
    private _http : Http
  ){}

  getAll() {

    return this._http.get(CONFIG.url + this._serviceName).map(res => res.json());

  }

  create(stockMovement : StockMovement) {

    let request = JSON.stringify(stockMovement);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    return this._http.post(CONFIG.url + this._serviceName, request, { headers : headers}).map( res => res.json());

  }

  move(productId : number, sourceWarehouseId : number, targetWarehouseId : number ) {

    return this._http.post(CONFIG.url + this._serviceName + '/product/' + productId + '/from/' + sourceWarehouseId + '/to/' + targetWarehouseId, {}).map(res => res.json());
  }

}
