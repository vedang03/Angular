import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
   @Input('xyz') incomingData:any
   @Output() outputData = new EventEmitter<string>()

   onSubmit(val:string){
     this.outputData.emit(val)
   }
}
