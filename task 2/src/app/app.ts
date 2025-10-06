import { Component, signal } from '@angular/core';
import {NotificationComponent } from './components/notification/notification'
import { ProductComponent } from './components/product/product';
@Component({
  selector: 'app-root',
  imports: [NotificationComponent ,ProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
