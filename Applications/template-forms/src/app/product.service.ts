import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products=new Array();

  prodForm=new Product();

  addProduct(product:Product){
    this.products.push(product);
    console.log(this.products);
    
  }

  listProducts(){
    return this.products;
  }

  constructor() { }
}
