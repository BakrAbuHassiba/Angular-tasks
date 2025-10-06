import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-form',

  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-form.html',
  styleUrls: ['./product-form.css'],
})
export class ProductFormComponent implements OnInit, OnChanges {

  @Output() sendDataEvent = new EventEmitter<Product>();
  @Input() productToEdit: Product | null = null;


  id = 0;
  productForm = new FormGroup({
    name: new FormControl<string>('', [Validators.maxLength(10), Validators.required]),
    desc: new FormControl<string>('', [Validators.maxLength(50), Validators.required]),
    img: new FormControl<string>('', [Validators.required]),
    rate: new FormControl<number | null>(null, [
      Validators.min(1),
      Validators.max(5),
      Validators.required,
    ]),
  });

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
    if (changes['productToEdit'] && this.productToEdit) {
      this.productForm.setValue({
        name: this.productToEdit.name,
        desc: this.productToEdit.desc,
        img: this.productToEdit.img,
        rate: this.productToEdit.rate,
      });
    }
  }
  ngOnInit(): void {
    console.log('ngOnInit run');
  }

  onSubmit() {
    if (this.productForm.valid && this.productForm.value['name'] && this.productForm.value['desc'] && this.productForm.value['img'] && this.productForm.value['rate']) {
      const product: Product = {
        id: ++this.id,
        name: this.productForm.value['name']!,
        desc: this.productForm.value['desc']!,
        img: this.productForm.value['img']!,
        rate: Number(this.productForm.value['rate']),
      };

      this.sendDataEvent.emit(product);
      console.log('Product Sent ', product);

      this.productForm.reset();
    } else {
      console.log('Form is invalid ', this.productForm.errors);
    }
  }
}
