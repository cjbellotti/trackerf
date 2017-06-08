import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Stock } from '../models/stock';
import { CONFIG } from './config';

@Injectable()
export class StockService {

  private _baseUrl = CONFIG.url + 'stock'
  constructor(
    private _http : Http
  ){}

  getAll() {

    return this._http.get(CONFIG.url + 'stock').map(res => res.json());

  }

  getStockByWarehouse(warehouseId : number ) {

    return this._http.get(this._baseUrl + '/warehouse/' + warehouseId).map(res => res.json());
    
  }

}
