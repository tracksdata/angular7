import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

@Input()
message:string=null;
@Output()
outMsg=new EventEmitter();

f1(){
  this.outMsg.emit('Good Afternoon tooo');
}
  constructor() { }

  ngOnInit() {
  }

}
