import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    AddingItemToCart(id, qty) {
        const items: { productId: any , quantity }[] = [  JSON.parse(localStorage.getItem('cart')) ];
        const newItems = { productId: id, quantity: qty };
        items.push(newItems);
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(items));
    }

    constructor() { }
    ngOnInit() { }

}
