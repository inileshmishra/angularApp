import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {products} from '../products';

import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCard(product: any): void{
    this.cartService.addToCart(product);
    window.alert('Product Added');
  }

}
