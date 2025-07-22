import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodoDirective]'
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false); // Tells it needs an input to determine if the todo is completed

  el = inject(ElementRef); // ElementRef to access the DOM element on which the directive is applied
  
  stylesEffect = effect(() => {
    var style = this.el.nativeElement.style;
    if (this.isCompleted()) {
      style.textDecoration = 'line-through'; // Strikethrough text for completed todos
      style.backgroundColor = '#d3f9d8'; // Light green background for completed todos
      style.color = '#6c757d'; // Dark gray text color for better contrast
    } else {
      var style = this.el.nativeElement.style;
      style.textDecoration = 'none'; // No strikethrough for incomplete todos
      style.backgroundColor = '#fff'; // Reset background color
      style.color = '#000'; // Reset text color
    }
  });
}
