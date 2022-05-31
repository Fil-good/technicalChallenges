import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  template: `

        <h2>

            {{counterValue}}
        </h2>
        <button (click)="increment();" class="counter-button">Click
            </button>
    `,
  styles: [`
        .counter-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:  #585858;
        }
    `]
})

export class CounterComponent {
  counterValue: number = 42;

  increment() {
    this.counterValue += 1;
  }

}
