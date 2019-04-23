import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  // Interpolation

  // String
  name="David ";
  // Array
  cities=['Hyderabad','Chennai','Delhi','Pune'];
  // Object
  emp={
    id:10,
    name:'Praveen',
    salary:8773
  }

   // Array of JSON
   
   employees=[
    {id:1,name:'Praveen',salary:9475957},
    {id:2,name:'James',salary:5487485},
    {id:3,name:'Ruth',salary:4537453},
    {id:4,name:'Ozvitha',salary:4637444},
    {id:5,name:'Priya',salary:3475374}
   ];

   // Directives 

   //1. Structural directives
    //  -> *ngIf -> works only on boolean
    //  -> *ngFor -> works only with array types

   showData=false;

    fun(){
      this.showData=true;
    }

    fun1(){
      this.showData=false;
    }

    toggle(){
      this.showData=!this.showData;
    }
 

    
 

}
