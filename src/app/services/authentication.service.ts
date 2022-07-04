import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedIn: boolean = false;

  checkLoggingIn() {
    return !!localStorage.getItem('Admin');
  }

  constructor() {}
}
