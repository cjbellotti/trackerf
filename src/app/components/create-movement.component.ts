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
  templateUrl : '../views/create-movement.html'
})

export class CreateMovementComponent {
  public title : string;
  public _stockMovement : StockMovement;

  public _productInfoList : Array<ProductInfoService>;
  public _warehouseList : Array<Warehouse>;
  public _productList : Array<Product>;

  public _productInfoId : number = 0;

  constructor(
    public _productInfoService : ProductInfoService,
    public _warehouseService : WarehouseService,
    public _productService : ProductService,
    public _stockMovementService : StockMovementService
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

  onProductInfoSelectChange() {
      console.log(`Seleccionado: ${this._productInfoId}`);
      this._productList = null;
      this._productService.getProductByProductInfoAndLocation(this._productInfoId,
                                                    this._stockMovement.sourceId)
          .subscribe(
            result => {
              this._productList = result;
            },
            error => {
              alert(<any>error);
            }
          );
  }

  onSubmit() {
    this._stockMovementService.move(this._stockMovement.productId,
                                    this._stockMovement.sourceId,
                                    this._stockMovement.targetId).subscribe(
      result => {
        this.reset();
      },
      error => {
        alert(<any>error);
      }
    );
  }

  validate() : boolean {
    return (this._stockMovement.sourceId > 0 &&
            this._stockMovement.targetId > 0 &&
            this._stockMovement.productId > 0 &&
            this._stockMovement.sourceId != this._stockMovement.targetId);
  }

}
