import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  childMsg:string;
  
  message:string=null;

  myFun(msg){
    this.childMsg=msg;
  }

  f2(data){
    this.message=data;
  }

}
