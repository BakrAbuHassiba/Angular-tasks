import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from '../product-form/product-form';
import { ProductListComponent } from '../product-list/product-list';

@Component({
  selector: 'app-product',
  imports: [CommonModule, ProductFormComponent, ProductListComponent],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  products: any[] = [];
  favoriteProducts: any[] = [];
  editingIndex: number | null = null;

  currentProduct = { name: '', price: '', category: '' };

  addOrUpdateProduct(product: any) {
    if (this.editingIndex !== null) {
      this.products[this.editingIndex] = product;
      this.editingIndex = null;
    } else {
      this.products.push(product);
    }
  }

  deleteProduct(index: number) {
    const productToDelete = this.products[index];
    this.products.splice(index, 1);
    this.favoriteProducts = this.favoriteProducts.filter(
      (fav) => fav.name !== productToDelete.name
    );
  }

  favoriteProduct(product: any) {
    const exists = this.favoriteProducts.find((fav) => fav.name === product.name);
    if (exists) {
      this.favoriteProducts = this.favoriteProducts.filter(
        (fav) => fav.name !== product.name
      );
    } else {
      this.favoriteProducts.push(product);
    }
  }

  editProduct(index: number) {
    this.editingIndex = index;
    this.currentProduct = { ...this.products[index] };
  }
}
