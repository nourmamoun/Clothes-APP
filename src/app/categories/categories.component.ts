import { Component } from '@angular/core';
import { Categories } from '../categories';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories: Categories[] = [{
    image: 'images/1.png',
    price: 100
  },
  {
    image: 'images/2.jpeg',
    price: 150
  },
  {
    image: 'images/3.jpeg',
    price: 200
  }]
}
