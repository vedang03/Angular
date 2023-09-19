import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input-movies',
  templateUrl: './input-movies.component.html',
  styleUrls: ['./input-movies.component.css'],
})
export class InputMoviesComponent {
  @Output() outputMovie = new EventEmitter<string>();
  @Output() outputDescription = new EventEmitter<string>();

    onSave(val1: string, val2: string) {
      this.outputMovie.emit(val1);
      this.outputDescription.emit(val2);
    }
}
