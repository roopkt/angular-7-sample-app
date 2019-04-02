import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productsDataService: ProductsDataService) {}
  products: Observable<any>;
  ngOnInit() {
    this.products = this.productsDataService.getProducts();
  }
}
