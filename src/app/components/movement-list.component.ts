import { Component } from '@angular/core';

import { WarehouseService } from '../services/warehouse.service';
import { ProductInfoService } from '../services/product-info.service';
import { ProductService } from '../services/product.service';
import { StockMovementService } from '../services/stock-movement.service';

import { Warehouse } from '../models/warehouse';
import { ProductInfo } from '../models/product-info';
import { Product } from '../models/product';
import { StockMovement } from '../models/stock-movement';

@Component({
  selector : 'movement-list',
  templateUrl : '../views/movement-list.html'
})

export class MovementListComponent {

  public title : string = 'Consultar Movimientos';

  private _fromDate : string;
  private _toDate : string;
  private _warehouseId : number;
  private _productInfoId : number;
  private _serial : string;

  private _warehouseList : Array<Warehouse>;
  private _productInfoList : Array<ProductInfo>;
  private _productList : Array<Product>;

  private _movementList = [];

  constructor(
    private _warehouseService : WarehouseService,
    private _productInfoService : ProductInfoService,
    private _productService : ProductService,
    private _stockMovementService : StockMovementService
  ){
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

  onProductInfoSelectChange() {
      this._productService.getProductByProductInfoAndLocation(this._warehouseId, this._productInfoId).subscribe(
        response => {
          this._productList = response;
        },
        error => {
          alert(<any>error);
        }
      );
  }

  list() {

      var criteria = {
        fromDate : this._fromDate,
        toDate : this._toDate,
        productInfoId : this._productInfoId,
        serial : this._serial,
        warehouseId : this._warehouseId
      };

      this._stockMovementService.getByCriteria(criteria).subscribe(
        response => {
          this._movementList = response;
        },
        error => {
          alert(<any>error);
        }
      )

  }

  reset() {
    this._fromDate = '';
    this._toDate = '';
    this._warehouseId = 0;
    this._productInfoId = 0;
    this._serial = '';
  }

}
