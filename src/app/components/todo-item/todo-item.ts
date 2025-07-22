import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo-directive';

@Component({
  selector: 'app-todo-item',
  imports: [HighlightCompletedTodoDirective],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss'
})
export class TodoItem {
  todo = input.required<Todo>(); // Required input for the todo item
  todoToggled = output<Todo>(); // Output event when the todo is toggled

  onTodoToggled() {
    this.todoToggled.emit(this.todo()); // Emit the todo item when toggled
  }
}
