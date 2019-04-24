import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {

  @Input()
  message:string=null;

  @Output()
  parentMsg=new EventEmitter();

  f1(){
    this.parentMsg.emit(this.message);
  }


}
