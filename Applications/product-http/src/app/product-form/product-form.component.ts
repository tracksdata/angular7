import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm:FormGroup;

constructor(private fb:FormBuilder,private ps:ProductService){}
errors:any=[];
ngOnInit() {
  this.productForm=this.fb.group(
    {
      id:[null,[Validators.required]],
      name:[null,[Validators.required]],
      price:[null,[Validators.required]] 
    }
  );
  // -----------
} // end of ngOnInit

get fn(){
  return this.productForm.controls;
}
handleForm(){
console.log(this.productForm.valid);
  console.log(this.productForm.value);
  this.ps.addProduct(this.productForm.value);
  this.productForm.reset();
  
}
}



