import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { StockMovement } from '../models/stock-movement';
import { CONFIG } from './config';

@Injectable()
export class StockMovementService {

  constructor(
    private _http : Http
  ){}

  getAll() {

    return this._http.get(CONFIG.url + 'stock_movement').map(res => res.json());

  }

}
