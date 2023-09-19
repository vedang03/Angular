import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05-forms-template';

  usersList:any[]=[]
  dataFromChild(val:any){

this.usersList.push(val)
  }
}
