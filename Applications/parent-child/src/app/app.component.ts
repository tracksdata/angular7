import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  greetMsg:string;
  myLable="Update";

  myFun(msg){
    this.greetMsg=msg;
  }

}
