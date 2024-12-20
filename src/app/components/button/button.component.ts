import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      class=" bg-red-500 text-white w-full  px-5 py-2 rounded-xl shadow-md hover:opacity-80"
      (click)="btnClicked.emit()"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input('');

  btnClicked = output();
}
