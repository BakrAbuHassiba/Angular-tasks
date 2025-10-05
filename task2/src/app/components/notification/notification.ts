import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class NotificationComponent {
  messageType: string = '';
  notifications: string[] = [];

  addNotification() {
    if (this.messageType) {
      this.notifications.push(this.messageType.toLowerCase());
      this.messageType = '';
    }
  }
}
