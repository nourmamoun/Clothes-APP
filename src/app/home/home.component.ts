import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { CategoriesComponent } from "../categories/categories.component";

@Component({
  selector: 'app-home',
  imports: [ProductComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
