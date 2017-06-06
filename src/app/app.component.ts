import { Component } from '@angular/core';
import { ProductInfoService } from './services/product-info.service';
import { WarehouseService } from './services/warehouse.service';
import { ProductService } from './services/product.service';
import { StockService } from './services/stock.service';
import { StockMovementService } from './services/stock-movement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [
    ProductInfoService,
    WarehouseService,
    ProductService,
    StockService,
    StockMovementService
  ]
})
export class AppComponent {
  title = 'Tracker';

  constructor(
    private _prductInfoService : ProductInfoService,
    private _warehouseService : WarehouseService,
    private _productService : ProductService,
    private _stockService : StockService,
    private _stockMovementService : StockMovementService
  ){

  }

  ngOnInit() {
    this._prductInfoService.getAll().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
    this._warehouseService.getAll().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
    this._productService.getAll().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
    this._stockService.getAll().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
    this._stockMovementService.getAll().subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
