import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Warehouse } from '../models/warehouse';
import { CONFIG } from './config';

@Injectable()
export class WarehouseService {

  private _serviceName : string = 'warehouse';
  constructor(
    private _http : Http
  ){}

  getAll() {

    return this._http.get(CONFIG.url + this._serviceName).map(res => res.json());

  }

  get(id : number ) {
    return this._http.get(CONFIG.url + this._serviceName + '/' + id).map(res => res.json());
  }

  create(warehouse : Warehouse) {

    let request = JSON.stringify(warehouse);
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    return this._http.post(CONFIG.url + this._serviceName, request, { headers : headers}).map( res => res.json());

  }

  update(warehouse : Warehouse) {

    let request = JSON.stringify(warehouse);
    let headers = new Headers({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS, PUT, DELETE'
    });
    return this._http.put(CONFIG.url + this._serviceName + '/' + warehouse.id, request, { headers : headers}).map( res => res.json());

  }

}
