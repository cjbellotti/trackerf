import { Component } from '@angular/core';
import { ProductInfo } from '../models/product-info';
import { Warehouse } from '../models/warehouse';

import { ProductInfoService } from '../services/product-info.service';
import { WarehouseService } from '../services/warehouse.service';
import { StockMovementService } from '../services/stock-movement.service';

@Component({
  selector : 'entry',
  templateUrl : '../views/entry.html'
})

export class EntryComponent {
  public title : string;

  public _productInfoId : number;
  public _targetWarehouseId : number;
  public _serial : string;

  public _productInfoList : Array<ProductInfoService>;
  public _warehouseList : Array<Warehouse>;

  constructor(
    public _productInfoService : ProductInfoService,
    public _warehouseService : WarehouseService,
    public _stockMovementService : StockMovementService
  ){
    this.title = 'Ingresar un Producto'
    this.reset();
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this._warehouseService.getAll().subscribe(
      response => {
        this._warehouseList = response;
      },
      error => {
        alert(<any>error);
      }
    );

    this._productInfoService.getAll().subscribe(
      response => {
        this._productInfoList = response;
      },
      error => {
        alert(<any>error);
      }
    );

  }

  reset() {
    this._productInfoId = 0;
    this._targetWarehouseId = 0;
    this._serial = '';
  }

  onSubmit() {
    this._stockMovementService.entry(this._productInfoId,
                                    this._targetWarehouseId,
                                    this._serial).subscribe(
      result => {
        this.reset();
      },
      error => {
        alert(<any>error);
      }
    );
  }

  validate() : boolean {
    return (this._productInfoId > 0 &&
            this._targetWarehouseId > 0 &&
            this._serial.length > 0);
  }

}
