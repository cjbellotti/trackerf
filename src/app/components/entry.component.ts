import { Component } from '@angular/core';
import { ProductInfo } from '../models/product-info';
import { StockMovement } from '../models/stock-movement';
import { Warehouse } from '../models/warehouse';
import { Product } from '../models/product';

import { ProductInfoService } from '../services/product-info.service';
import { WarehouseService } from '../services/warehouse.service';
import { ProductService } from '../services/product.service';
import { StockMovementService } from '../services/stock-movement.service';

@Component({
  selector : 'entry',
  templateUrl : '../views/entry.html'
})

export class EntryComponent {
  public title : string;
  private _stockMovement : StockMovement;

  private _productInfoList : Array<ProductInfoService>;
  private _warehouseList : Array<Warehouse>;
  private _productList : Array<Product>;

  constructor(
    private _productInfoService : ProductInfoService,
    private _warehouseService : WarehouseService,
    private _productService : ProductService,
    private _stockMovementService : StockMovementService
  ){
    this.title = 'Productos'
    this._stockMovement = new StockMovement(0,0,0,0,new Date(),null,null,null);
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
    this._stockMovement.id = 0;
    this._stockMovement.productId = 0;
    this._stockMovement.sourceId = 0;
    this._stockMovement.targetId = 0;
    this._stockMovement.movementDate = new Date();
    this._stockMovement.product = null;
    this._stockMovement.source = null;
    this._stockMovement.target = null;
  }

  onSubmit() {
    // create stock_movement
  }

}
