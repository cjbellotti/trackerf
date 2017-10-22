import { Component } from '@angular/core';
import { ProductInfo } from '../models/product-info';
import { ProductInfoService } from '../services/product-info.service';

@Component({
  selector : 'products',
  templateUrl : '../views/products.html'
})

export class ProductsComponent {
  public title : string;
  public _lista : Array<ProductInfo>;
  public _form : boolean = false;
  public _new : boolean = false;
  public _update : boolean = false;
  public _productInfo : ProductInfo;

  public loading : boolean = false;

  constructor(
    public _productInfoService : ProductInfoService
  ){
    this.title = 'Productos'
    this._productInfo = new ProductInfo(0,'');
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this._productInfoService.getAll().subscribe(
      response => {
        this._lista = response;
      },
      error => {
        alert(error);
      }
    );
  }

  enableNew() {
      this.reset();
      this._form = true;
      this._new = true;
  }

  disableNew() {
      this._form = false;
      this._new = false;
  }

  reset() {
    this._productInfo.id = 0;
    this._productInfo.name = '';
  }

  onSubmit() {
    this.loading = true;

    if (this._new) {
      this._productInfoService.create(this._productInfo).subscribe(
        response => {
          this.load();
          this._form = false;
          this._new = false;
          this.loading = false;
        },
        error => {
          alert(<any>error);
          this.loading = false;
        }
      );
    } else if (this._update) {
      this._productInfoService.update(this._productInfo).subscribe(
        response => {
          this.load();
          this._form = false;
          this._update = false;
          this.loading = false;
        },
        error => {
          alert(<any>error);
          this.loading = false;
        }
      );
    }
  }

  update(id : number ) {
    console.log('Update: ' + id);
    this._productInfoService.get(id).subscribe(
      response => {
        this._productInfo = response;
        this._form = true;
        this._update = true;
      },
      error => {
        alert(<any>error);
      }
    );
  }

  delete(id : number ) {
    console.log('Delete: ' + id);
  }

}
