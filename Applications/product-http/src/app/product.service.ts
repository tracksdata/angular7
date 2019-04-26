import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //products=new Array();
   url='http://localhost:8080/api/products/'
  addProduct(product){
    //this.products.push(product);
    console.log(JSON.stringify(product));
    return this.http.post(product,this.url);
      
  }

  listAll(){
    //return this.products;
    return this.http.get(this.url);
  }

  constructor(private http:HttpClient) { }
}
