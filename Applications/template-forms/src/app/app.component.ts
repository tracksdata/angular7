import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  myObject={
    isReadOnly:false,
    btnLable:'Save'
  }



  manageProperties(myData){
    this.myObject=myData;
  }
  products=new Array();
  constructor(private ps:ProductService){}
  product:Product;
  found:boolean;
  
  
  handleForm(prodForm:NgForm){
  this.found=false;
// List all products from Service class
 this.products=this.ps.listProducts();
 if(this.myObject.btnLable=="Update")
  this.products.map((prod,index)=>{
    if(prod.id==prodForm.value.id){
      this.products[index]=prodForm.value;
      this.found=true;
      this.myObject.isReadOnly=false;
      this.myObject.btnLable='Save';
      return false;
    }
  });
 

  console.log('--- test '+this.found);
  
  if(!this.found){
    console.log('-- test 1');
    
    this.ps.addProduct(prodForm.value);
    this.resetForm(prodForm);
    this.found=false;
  }
    
    this.resetForm(prodForm);
   // prodForm.resetForm();
  }

  changeLable(){
    this.myObject.btnLable='Save';
    this.myObject.isReadOnly=false;
    this.ps.prodForm={
      id:null,
      name:null,
      price:null
    }
  }
  resetForm(prodForm:NgForm){
  if(prodForm!=null)
    prodForm.resetForm();
    this.ps.prodForm={
      id:null,
      name:null,
      price:null
    }
  }



}
