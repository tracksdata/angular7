import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  greetMsg:string;
  childMsg:string=null;
  greet(msg){
    this.greetMsg=msg;
  }

  f2(data){
    this.childMsg=data;
  }
  

}
