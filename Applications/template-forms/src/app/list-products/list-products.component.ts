import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products:any;
  constructor(private ps:ProductService) { }

  ngOnInit() {
   this.products=this.ps.listProducts();
  }

  myObject={};

  @Output()
  parentData=new EventEmitter();


  editData(product:Product){
    this.myObject={
      isReadOnly:true,
      btnLable:'Update'
    };
    //this.ps.prodForm=product;
    this.ps.prodForm=Object.assign({},product);
    this.parentData.emit(this.myObject)


  }

}
