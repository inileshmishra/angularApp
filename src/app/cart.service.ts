import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) {}

  items: any[]  = [];

  addToCart(product: any): void{
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearItems(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
