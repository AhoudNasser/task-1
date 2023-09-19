import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: '',
    password: ''
  };

  onSubmit() {
    if (this.user.username && this.user.password) {
      // Perform your login logic here
      console.log('Username: ', this.user.username);
      console.log('Password: ', this.user.password);
    } else {
      // Handle validation error
      console.log('Please enter both username and password.');
    }
  }
}

