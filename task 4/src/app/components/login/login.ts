import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Dir } from "../../directives/dir";

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, Dir],
  templateUrl: './login.html',
})
export class Login {
  name = '';
  email = '';
  password = '';


  constructor(private router: Router) {}

  login() {
    if (this.name && this.email && this.password) {
      const user = { name: this.name, email: this.email };
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/home']);
      console.log("User added to local storage");
    } else {
      console.log("error login data");
    }
  }
}
