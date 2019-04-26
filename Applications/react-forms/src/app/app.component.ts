import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { ProductService } from './product.service';
import { badWordsFilter } from '.';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

productForm:FormGroup;

constructor(private fb:FormBuilder,private ps:ProductService){}
errors:any=[];
ngOnInit() {
  this.productForm=this.fb.group(
    {
      id:[null,[Validators.required]],
      name:[null,[Validators.required]],
      price:[null,[Validators.required]],
      phone:['',[MyCustomValidations.phoneNumberValidator]],
      review:[null,[badWordsFilter]]
    }
  );

  // -----------

  // let is ES6 feature 
  let reviewControl=this.productForm.get('review');

  reviewControl.statusChanges // stream
  .subscribe(data=>{
    if(data=="INVALID")
      if(reviewControl.errors.bad==true){
        this.errors['body']="Bad words not allowed";
      }else{
        
        this.errors['body']='';
      }
  })


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

class MyCustomValidations{
  // Validates US Phone Number
static phoneNumberValidator(phoneno): any {
  if (phoneno.pristine) {
     return null;
  }
  const USPHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;  
  phoneno.markAsTouched();
  if (USPHONE_REGEXP.test(phoneno.value)) {
     return null;
  }
  return {
     invalidPhone: true
  };
}
}


