import { Component } from '@angular/core';
import { Warehouse } from '../models/warehouse';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector : 'warehouses',
  templateUrl : '../views/warehouse.html'
})

export class WarehousesComponent {
  public title : string;
  public _lista : Array<Warehouse>;
  public _form : boolean = false;
  public _new : boolean = false;
  public _update : boolean = false;
  public _warehouse : Warehouse;

  public loading : boolean = false;

  constructor(
    public _warehouseService : WarehouseService
  ){
    this.title = 'Ubicaciones'
    this._warehouse = new Warehouse(0,'');
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this._warehouseService.getAll().subscribe(
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
    this._warehouse.id = 0;
    this._warehouse.name = '';
  }

  onSubmit() {
    this.loading = true;
    console.log(this._new);
    if (this._new) {
      this._warehouseService.create(this._warehouse).subscribe(
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
      this._warehouseService.update(this._warehouse).subscribe(
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
    this.loading = true;
    console.log('Update: ' + id);
    this._warehouseService.get(id).subscribe(
      response => {
        this._warehouse = response;
        this._form = true;
        this._update = true;
        this.loading = false;
      },
      error => {
        alert(<any>error);
        this.loading = false;
      }
    );
  }

  delete(id : number ) {
    console.log('Delete: ' + id);
  }

}
