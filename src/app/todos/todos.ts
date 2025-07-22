import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos-service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss'
})
export class Todos implements OnInit {
  todosService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    console.log('Todos component initialized');
    this.todosService.getTodosFromApi()
      .pipe(
        // Add any necessary operators here, e.g., catchError, map, etc.
        catchError((error) => {
          console.error('Error fetching todos:', error);
          throw error; // Re-throw the error to be handled by the caller
        })
      )
      .subscribe((todos: Array<Todo>) => {
        console.log('Todos fetched successfully:', todos);
        this.todoItems.set(todos);
      });
  }
}
