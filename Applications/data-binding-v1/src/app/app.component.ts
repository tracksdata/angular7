import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imageUrl="assets/images/tnj.png";
  submited=true;

  now=new Date();

  colors=['red','blue','green','yellow','pink'];
  selectedColor=null;
  textColor="green";
  empName="Praveen";

  emp={
    id:10,
    name:'Praveen',
    salary:7384683
  }

  setColor(colorName){
    this.selectedColor=colorName;
    console.log('color: '+colorName);
    
  }


}
