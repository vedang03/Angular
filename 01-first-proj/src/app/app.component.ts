import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Vedang'
  counter : number = 0
   inputValue:any
  

  linkUrl="https://jsonplaceholder.typicode.com/comments"

  incrementCounter (){
    if(this.counter<10){
    this.counter+=1;
    }
  }
  decrementCounter(){
    if(this.counter>0){
    this.counter-=1
    }
  }


}
