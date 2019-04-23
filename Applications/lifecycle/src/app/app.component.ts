import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  name="Praveen";
  age:Number;
  id:number;

  constructor(){
    employees:new Array();
    students:Number;
    console.log('---- constructor');
    
  }

  myMethod(){
    //empName="James";
    console.log('---- myMethod executed');
    console.log('-- yor name is '+this.name);
    
    
  }
 
  ngOnInit() {
   // empName="James";
    console.log('-- ngOnInit method');
    this.myMethod();
    
  }

}
