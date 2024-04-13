import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3>Counter: {{counter}}</h3>

  <p>bienvenidos a angular</p>
  <button (click)="increaseBy(1)">Incrementar</button>
  <button (click)="desincreaseBy(1)">Desincrementar</button>
  <button (click)="resetCounter()">Reset</button>


  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy( value: number): void {
    this.counter += value;
  }

  desincreaseBy( value: number): void {
    this.counter -= value;
  }

  resetCounter(): void{
    this.counter = 10;
  }
}
