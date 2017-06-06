import { Product } from './product';
import { Warehouse } from './warehouse';

export class StockMovement {

  constructor(
    public id : number,
    public productId : number,
    public sourceId : number,
    public targetId : number,
    public movementDate : Date,
    public product : Product,
    public source : Warehouse,
    public target : Warehouse
  ){}

}
