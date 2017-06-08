import { Component } from '@angular/core';
import { Warehouse } from '../models/warehouse';
import { Stock } from '../models/stock';
import { WarehouseService } from '../services/warehouse.service';
import { StockService } from '../services/stock.service';

@Component({
  selector : 'stock-summary',
  templateUrl : '../views/stock-summary.html'
})

export class StockSummaryComponent {

  private _warehouseId : number;
  private _warehouseList : Array<Warehouse>;
  private _stockList : Array<Stock>;

  constructor(
    private _warehouseService : WarehouseService,
    private _stockService : StockService
  ){
    this.reset();
  }

  reset() {
    this._warehouseId = 0;
    this._warehouseService.getAll().subscribe(
      response => {
        this._warehouseList = response;
      },
      error => {
        alert(<any>error);
      }
    );
  }

  list() {

    this._stockService.getStockByWarehouse(this._warehouseId).subscribe(
      response => {
        this._stockList = response;
      },
      error => {
        alert(<any>error);
      }
    );
  }

}
