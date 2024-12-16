import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
    <div
      class="bg-slate-600 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <span class="text-xl text-white">My Web Shop</span>
      <app-primary-button label="Cart" (btnClicked)="showBtnClicked()" />
    </div>
  `,
  styles: `
  `,
})
export class HeaderComponent {
  showBtnClicked() {
    console.log('clicked');
  }
}
