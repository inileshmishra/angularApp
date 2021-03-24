import { Component, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share(): void{
    window.alert('Product has been shared');
  }

  onNotify(): void {
    window.alert('Product has been notify');
  }

}
