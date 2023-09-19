import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent {
@Input()  movies:any
color:any
static count:number=2;
alternateStyle(){
   if(DisplayMovieComponent.count%2==0){
    this.color="card text-white bg-primary mb-3"
    console.log("Clicked")
    console.log(DisplayMovieComponent.count)

   }else{
    this.color="card text-white bg-warning mb-3"
    console.log("Clicked")
   console.log(DisplayMovieComponent.count)
   }
   DisplayMovieComponent.count++
}

}
