import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tfh-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoginMode = true;
  showPasswordLogin = false;
  showPasswordRegister = false;

  toggleMode(mode: 'login' | 'register') {
    this.isLoginMode = (mode === 'login');
  }

  toggleShowPasswordLogin() {
    this.showPasswordLogin = !this.showPasswordLogin;
  }

  toggleShowPasswordRegister() {
    this.showPasswordRegister = !this.showPasswordRegister;
  }

  onLoginSubmit() {
    console.log('Login form submitted');
  }

  onRegisterSubmit() {
    console.log('Register form submitted');
  }
}

