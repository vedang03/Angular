import { Component } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
hero:Hero={
  id:1,
  name:"Windstorm"
}
heroes=Heroes;

selectedHero?:Hero
onSelect(val:Hero){
  this.selectedHero=val
}
}


