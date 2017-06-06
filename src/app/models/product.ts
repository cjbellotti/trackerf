import { ProductInfo } from './product-info';
import { Warehouse} from './warehouse';

export class Product {

  constructor(
    public id : number,
    public productInfoId : number,
    public productInfo : ProductInfo,
    public locationId : number,
    public location : Warehouse
  ) {}

}
