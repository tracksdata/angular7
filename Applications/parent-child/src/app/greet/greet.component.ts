import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  @Input()
  lableName:string;

  @Input()
  message:string;

  constructor() { }

  ngOnInit() {
  }

}
