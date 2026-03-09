import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'action-button',
  imports: [MatButtonModule],
  templateUrl: './action-button.html',
  styleUrl: './action-button.css',
})
export class ActionButton {
  color = input<string>();
  label = input<string>();
  buttonEvent = output<void>();

  onClick() {
    this.buttonEvent.emit();
  }
}
