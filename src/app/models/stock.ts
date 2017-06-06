import { ProductInfo } from './product-info';
import { Warehouse } from './warehouse';

export class Stock {

  constructor(
    public id : number,
    public warehouseId : number,
    public productInfoId : number,
    public quantity : number,
    public product_info : ProductInfo,
    public warehouse : Warehouse
  ){}

}
