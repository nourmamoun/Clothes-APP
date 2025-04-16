import { Component, Input } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
@Input() product: Products = {} as Products;
}
