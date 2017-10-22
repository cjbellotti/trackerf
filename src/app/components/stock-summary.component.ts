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

  public _warehouseId : number;
  public _warehouseList : Array<Warehouse>;
  public _stockList : Array<Stock>;

  public loading : boolean = false;

  constructor(
    public _warehouseService : WarehouseService,
    public _stockService : StockService
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
    this.loading = true;
    this._stockService.getStockByWarehouse(this._warehouseId).subscribe(
      response => {
        this._stockList = response;
        this.loading = false;
      },
      error => {
        alert(<any>error);
        this.loading = false;
      }
    );
  }

}
