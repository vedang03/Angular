import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '03-third-proj';
  show: boolean = true;
  color: string = 'green';
  players: string[] = ['virat', 'sachin', 'dhoni'];
  todos: any[] = [];
  id: number = 0;
  onSave(value: string) {
    this.todos.push({ id: this.id++, todo: value });
  }
  delete(value: string) {
    this.todos.splice(this.todos.indexOf(value), 1);
    
  }

  students = [
    {
      id: 10,
      firstname: 'ved',
      lastname: 'bad',
    },
    {
      id: 11,
      firstname: 'tom',
      lastname: 'roar',
    },
    {
      id: 44,
      firstname: 'something',
      lastname: 'nothing',
    },
  ];
}
