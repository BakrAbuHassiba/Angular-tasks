import { Component } from '@angular/core';
import { ProductFormComponent } from './components/product-form/product-form';
import { ProductListComponent } from './components/product-list/product-list';
import { Product } from './components/product.model';

@Component({
  selector: 'app-root',

  imports: [ProductFormComponent, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  addProduct(product: Product) {
    console.log('New Product Added', product);
    this.products.push(product);
  }
}
