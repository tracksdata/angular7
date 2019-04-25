import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private ps:ProductService){}
  product={
    id:null,
    name:null,
    price:0.0
  }

  handleForm(){
    console.log(this.product);
    this.ps.addProduct(this.product);
    this.resetForm();
  }

  resetForm(){
    this.product={
      id:null,
      name:null,
      price:null
    }
  }



}
