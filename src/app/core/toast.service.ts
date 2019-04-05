import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private snackbar: MatSnackBar) {}

  open(message: string, action: string) {
    this.snackbar.open(message, action, { duration: 2000 });
  }
}
