import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLogged: boolean = false;
  username: string = '';
  password: string = '';

  submitForm() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }
}
