import { Component } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Products[] = [
    {
      image: 'images/1.png',
      productName: 'Product 1',
      productPrice: 100,
      productDescription: 'Description of Product 1',
      onSale: true
    },
    {
      image: 'images/2.jpeg',
      productName: 'Product 2',
      productPrice: 150,
      productDescription: 'Description of Product 2',
      onSale: false
    },
    {
      image: 'images/3.jpeg',
      productName: 'Product 3',
      productPrice: 200,
      productDescription: 'Description of Product 3',
      onSale: true
    }
  ]
}
