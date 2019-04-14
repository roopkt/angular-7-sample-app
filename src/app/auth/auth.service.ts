import { Injectable } from '@angular/core';
import { BehaviorSubject, of, throwError } from 'rxjs';

export interface User {
  fullname: string;
  password: string;
  repeatPassword: string;
  email: string;
  hashedPassword?: string;
}
export class AuthService {
  state = {
    users: []
  };

  constructor() {}

  register(user: User) {
    this.state.users.push(user);

    console.log('state after register', this.state);
    return of(user);
  }

  login(email: string, password: string) {
    const user = this.state.users
      .filter(u => u.email === email && u.password === password)
      .pop();

    if (!user) {
      return throwError(
        'Your login details could not be verified. Please try again.'
      );
    }

    return of(user);
  }
}
