import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greeting, Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  homeMessage = signal('Hello, world!!!');

  keyUpHandler(event: KeyboardEvent): void {
    // This method is called when a key is released in the input field
    console.log(`User pressed key: ${event.key}`);
  }
}
