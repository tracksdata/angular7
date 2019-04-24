import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='James';

    cities=['Chennai','Hyderabad','Bangalore','Mumbai','Goa','Pune','Indore'];
    

  calculate(base,expo):number{
    return Math.pow(base,expo);
  }
}
