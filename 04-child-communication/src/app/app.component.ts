import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04-child-communication';
  // dataValue:number=10
  // userValue=''

  // dataFromChild(val:string){
  //   this.userValue=val
  // }
movie=''
description=''
count:number=0
moviesList:any[]=[]
  movieFromChild(val:string){
this.movie=val

  }
  descriptionFromChild(val:string){
this.description=val
this.moviesList.push({name:this.movie,description:this.description})
  }

  
}
