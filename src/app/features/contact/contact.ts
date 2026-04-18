import { Component, inject, signal } from '@angular/core';
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
  private snackBarErrorMessage = 'Please Enter Details !!';
  protected subject = signal<string>('');
  protected message = signal<string>('');

  download() {
    window.open('assets/file/NC Naik Resume.pdf', '_blank');
  }
  submitForm() {
    if(this.subject() != '' && this.message() != ''){
    const mailTo = 'ncnaik131@gmail.com';
    const mailSubject = encodeURIComponent(this.subject());
    const mailMessage = encodeURIComponent(this.message());
   
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${mailTo}&su=${mailSubject}&body=${mailMessage}`;
    window.open(gmailUrl, '_blank');
    } else {
      this._snackBar.open(this.snackBarErrorMessage, 'Close');
    }
    // this._snackBar.open(this.snackBarMessage, 'Close');
  }
  updateSubject(event:Event){
    this.subject.set((event.target as HTMLInputElement).value);
  };
  updateMessage(event:Event){
    this.message.set((event.target as HTMLInputElement).value)
  }
}
