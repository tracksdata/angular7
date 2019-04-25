import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products=[];
  constructor(private ps:ProductService) { }

  ngOnInit() {
    this.products=this.ps.listProducts();
  }

}
