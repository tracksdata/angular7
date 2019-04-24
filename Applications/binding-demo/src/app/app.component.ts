import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   textColor="blue";

   cityName='Chennai';

   myFun(name){
    console.log('--- name: '+name);
    
   }



}
