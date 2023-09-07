import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
   todos:any[]=[]
   id=0

   save(value:string){
      if(value.length!=0){
      this.todos.push({id:this.id++ , todo:value})
      }
   }

   delete(value:string){
    this.todos.splice(this.todos.indexOf(value),1)
   }
  completed:any[]=[]

   onComplete(value:object){
      this.completed.push(value)
      this.todos.splice(this.todos.indexOf(value),1)
   }

   finalDelete(val:string){
      this.completed.splice(this.completed.indexOf(val),1)
   }
  

}
