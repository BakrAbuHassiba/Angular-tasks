import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductFormComponent {
  @Input() product: any = { name: '', price: '', category: '' };
  @Input() isEditing = false;
  @Output() onSave = new EventEmitter<any>();

  save() {
    if (this.product.name && this.product.price && this.product.category) {
      this.onSave.emit(this.product);
      this.product = { name: '', price: '', category: '' };
    }
  }
}
