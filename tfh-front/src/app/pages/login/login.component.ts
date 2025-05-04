import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router} from '@angular/router';

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
  constructor(private router: Router) {}

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
    alert('Login form submitted');
  }

  onLogin(){
    this.router.navigate(['']);
  }

  onRegisterSubmit() {
    alert('Register form submitted');
  }
}