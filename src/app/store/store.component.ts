import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product/productservice";
import {Hero} from "../Hero";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
    heroList: Hero[] = [];
    herooo: Hero[];

  constructor(private productService: ProductService) { }

  ngOnInit() {

      this.heroList.push(this.getProducts());



  }

    getProducts(): Hero {


        this.productService.getAllProducts()
            .then(herooo => this.herooo = herooo);
        let herooo = new Hero();

        return herooo;


    }

}
