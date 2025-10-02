import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-form-comp',
  imports: [FormsModule],
  templateUrl: './form-comp.html',
  styleUrl: './form-comp.css'
})
export class FormComp {
  name: string = '';
  email: string = '';
  user: { name: string; email: string } | null = null;
  addUser() {
    if (this.name && this.email) {
      this.user = { name: this.name, email: this.email };
    }
  }
}





