import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productList?: IProduct[];
  categoryList?: ICategory[];
  totalPrice: number = 0;
  selectedCategoryId?: number;
  constructor() {

    this.categoryList = [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Tablet" },
      { id: 3, name: "Watch" }
    ]
    this.productList = [
      { id: 100, name: "Lenovo Thinkpad", price: 100, quantity: 1, imageUrl: "https://fakeimg.pl/250x100/", categoryId: 1 },
      { id: 200, name: "Lenovo Legion", price: 2300, quantity: 10, imageUrl: "https://fakeimg.pl/250x100/", categoryId: 1 },
      { id: 300, name: "Samsung Ipad", price: 150, quantity: 7, imageUrl: "https://fakeimg.pl/250x100/", categoryId: 2 },
      { id: 400, name: "Iphone 12", price: 200, quantity: 1, imageUrl: "https://fakeimg.pl/250x100/", categoryId: 2 },
      { id: 500, name: "Apple watch", price: 100, quantity: 1, imageUrl: "https://fakeimg.pl/250x100/", categoryId: 3 },
    ]
  }

  Buy(price: number, count: any): void {
    this.totalPrice = price * parseInt(count);
  }
}
