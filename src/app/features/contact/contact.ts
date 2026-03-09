import { Component, inject } from '@angular/core';
import { ActionButton } from '../../shared/components/action-button/action-button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppIcons } from '../../shared/components/app-icons/app-icons';

@Component({
  selector: 'app-contact',
  imports: [ActionButton, MatInputModule, MatFormFieldModule, MatIconModule, AppIcons],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private _snackBar = inject(MatSnackBar);
  private snackBarMessage = 'Feature coming soon!,  Please reach out via email: ncnaik131@gmail.com';
  
  download() {
    window.open('assets/file/NC Naik Resume.pdf', '_blank');
  }
  submitForm() {
    this._snackBar.open(this.snackBarMessage, 'Close');
  }
}
