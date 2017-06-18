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

  public _fromDate : string;
  public _toDate : string;
  public _warehouseId : number;
  public _productInfoId : number;
  public _serial : string;

  public _warehouseList : Array<Warehouse>;
  public _productInfoList : Array<ProductInfo>;
  public _productList : Array<Product>;

  public _movementList = [];

  constructor(
    public _warehouseService : WarehouseService,
    public _productInfoService : ProductInfoService,
    public _productService : ProductService,
    public _stockMovementService : StockMovementService
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
