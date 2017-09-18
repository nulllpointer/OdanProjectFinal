import {Hero} from "../Hero";
export class Cart {


   private _product :Hero=new Hero();

   private _quantity:number;


    get product(): Hero {
        return this._product;
    }

    set product(value: Hero) {
        this._product = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }
}
